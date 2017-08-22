# Data Visualization Application.
## Using Chart.js to show data using amazing visualization options.
---

## Radar

A radar chart is a way of showing multiple data points and the variation between them.

They are often useful for comparing the points of two or more different data sets.


Example Usage

```javascript
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});
```
### Dataset Properties

The radar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.

All point* properties can be specified as an array. If these are set to an array value, the first value applies to the first point, the second value to the second point, and so on.

`Name`	`Typ`	`Description`
label	String	The label for the dataset which appears in the legend and tooltips.
backgroundColor	Color/Color[]	The fill color under the line. See Colors
borderColor	Color/Color[]	The color of the line. See Colors
borderWidth	Number/Number[]	The width of the line in pixels.
borderDash	Number[]	Length and spacing of dashes. See MDN
borderDashOffset	Number	Offset for line dashes. See MDN
borderCapStyle	String	Cap style of the line. See MDN
