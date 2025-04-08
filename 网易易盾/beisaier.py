import numpy as np
import random


class BezierTrajectoryGenerator:
    def __init__(self, distance):
        self.distance = distance
        self.original_segments = [
            {  # 初始滑动阶段 (y=0)
                'control_points': [(5, 0), (20, 0), (40, 0), (60, 0)],
                'duration': 313 - 157,
                'start_time': 157,
                'noise': (0.3, 0.1)
            },
            {  # 暂停阶段
                'duration': 567 - 313,
                'start_time': 313,
                'hold': 60
            },
            {  # 上滑阶段 (y=1)
                'control_points': [(60, 0), (75, 1), (90, 1), (110, 1)],
                'duration': 763 - 567,
                'start_time': 567,
                'noise': (0.5, 0.2)
            },
            {  # 下滑阶段 (y=-1)
                'control_points': [(110, 1), (120, 0), (130, -1), (141, -1)],
                'duration': 991 - 763,
                'start_time': 763,
                'noise': (0.5, 0.3)
            }
        ]

    def cubic_bezier(self, p0, p1, p2, p3, num_points):
        """生成三次贝塞尔曲线点"""
        t = np.linspace(0, 1, num_points)
        x = (1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0] + 3 * (1 - t) * t ** 2 * p2[0] + t ** 3 * p3[0]
        y = (1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1] + 3 * (1 - t) * t ** 2 * p2[1] + t ** 3 * p3[1]
        return np.column_stack((x, y))

    def generate_trajectory(self):
        full_trajectory = []

        for seg in self.original_segments:
            current_seg = seg.copy()

            # 调整control_points和hold的x坐标
            if 'control_points' in current_seg:
                adjusted_control_points = []
                for (x, y) in current_seg['control_points']:
                    adjusted_x = (x - 5) * (self.distance / 136.0)
                    adjusted_control_points.append((adjusted_x, y))
                current_seg['control_points'] = adjusted_control_points

            if 'hold' in current_seg:
                original_hold = current_seg['hold']
                current_seg['hold'] = (original_hold - 5) * (self.distance / 136.0)

            if 'hold' in current_seg:  # 处理暂停阶段
                num_points = int(current_seg['duration'] / 20)
                hold_x = current_seg['hold']
                points = [[hold_x, 0]] * num_points
                times = np.linspace(
                    current_seg['start_time'],
                    current_seg['start_time'] + current_seg['duration'],
                    num_points
                )
            else:  # 贝塞尔曲线阶段
                num_points = int(current_seg['duration'] / 10)
                p0, p1, p2, p3 = current_seg['control_points']
                raw_points = self.cubic_bezier(p0, p1, p2, p3, num_points)

                # 添加噪声
                noisy_points = []
                for p in raw_points:
                    dx = random.normalvariate(0, current_seg['noise'][0])
                    dy = random.normalvariate(0, current_seg['noise'][1])
                    noisy_points.append([p[0] + dx, p[1] + dy])

                times = np.linspace(
                    current_seg['start_time'],
                    current_seg['start_time'] + current_seg['duration'],
                    num_points
                )
                points = noisy_points

            # 合并轨迹
            for t, (x, y) in zip(times, points):
                full_trajectory.append({
                    'x': x,
                    'y': int(round(y)),
                    't': t
                })

        # 后处理
        full_trajectory.sort(key=lambda x: x['t'])

        # 添加最终扰动并格式化
        result = []
        for p in full_trajectory:
            final_x = int(round(p['x'] + random.uniform(-0.1, 0.1)))
            final_y = p['y']
            final_t = int(round(p['t'] + random.uniform(-2, 2)))
            result.append([final_x, final_y, final_t])

        # 将第一个点的 x 值设置为 5，并确保后续的 x 值递增
        if result:
            initial_x = 4
            result[0][0] = initial_x
            for i in range(1, len(result)):
                if result[i][0] < result[i-1][0]:
                    result[i][0] = result[i-1][0] + 1

        return result


# 使用示例
if __name__ == "__main__":
    # 生成总移动距离为100的轨迹
    generator = BezierTrajectoryGenerator(distance=100)
    trajectory = generator.generate_trajectory()

    for p in trajectory[:10] + trajectory[-10:]:
        print(p)
