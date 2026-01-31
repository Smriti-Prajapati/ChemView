from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg
from matplotlib.figure import Figure

class BarChart(FigureCanvasQTAgg):
    def __init__(self, data):
        self.fig = Figure(figsize=(5, 4))
        super().__init__(self.fig)
        self.ax = self.fig.add_subplot(111)
        self.plot(data)

    def plot(self, data):
        labels = list(data.keys())
        values = list(data.values())

        self.ax.clear()
        self.ax.bar(labels, values)
        self.ax.set_title("Equipment Distribution")
        self.ax.set_ylabel("Count")
        self.fig.tight_layout()
