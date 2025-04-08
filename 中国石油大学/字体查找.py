from matplotlib.font_manager import FontManager
print([f.name for f in FontManager().ttflist if 'Songti' in f.name])  # 搜索含"Songti"的字体
