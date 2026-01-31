import sys
from PyQt5.QtWidgets import QApplication
from ui import MainUI

app = QApplication(sys.argv)
window = MainUI()
window.show()
sys.exit(app.exec_())
