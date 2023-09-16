function grass(XLength, YLength) {
  var gridXLength = XLength / 10
  var gridYLength = YLength / 10
  fill(30, 130, 30)
  for (var i = 0; i < XLength + gridXLength; i+=gridXLength) {
    strokeWeight(2)
    rect(i - gridXLength, 0, gridXLength, gridXLength)
    for (var j = 0; j < YLength + gridYLength; j+=gridYLength) {
      rect(i - gridYLength, j - gridYLength, gridYLength, gridYLength)
    }
  }
}