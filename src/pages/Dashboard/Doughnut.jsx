import React from "react";
import { PieChart, Legend, Pie, Tooltip } from "recharts";

const data01 = [
    { name: "Cancelled", value: 30, fill: "rgb(255, 99, 132)" },
    { name: "Delivered", value: 345, fill: "rgb(54, 162, 235)" },
    { name: "Processing", value: 99, fill: "rgb(255, 205, 86)" },
    { name: "Ready TO deliver", value: 263, fill: "rgb(50,205,50)" },
    { name: "Pending", value: 202, fill: "rgb(211,211,211)" }

];
const renderColorfulLegendText = (value: string, entry: any) => {
    return (
        <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
            {value}
        </span>
    );
};
const Tip = ({ setShowTooltip, ...rest }) => {
    const [payload, setPayload] = React.useState(rest.payload);

    // When the payload has data (area hovered in the chart), add it to the state
    // so we can use it to show and hide the tooltip at our expense
    React.useEffect(() => {
        rest.payload.length && setPayload(rest.payload);
    }, [rest.payload]);

    return payload.length ? (
        <div
            // Tooltip hides when leaving the tooltip itself
            onMouseLeave={() => setShowTooltip(false)}
            // Prevent Rechart events while the mouse is over the tooltip
            onMouseMove={e => e.stopPropagation()}
            style={{
                background: "white",
                padding: "2em",
                borderRadius: "4px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
        >
            {`${payload[0].name}: ${payload[0].value}`}
        </div>
    ) : null;
};

export default function Chart (){
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
        <div> <p className="bold large">Overview</p>
            <PieChart
                width={400}
                height={450}
                // Tooltip hides when leaving the Chart area
                onMouseLeave={() => setShowTooltip(false)}
            >
                <Legend
                    height={0}
                    iconType="circle"
                    layout="horizontal"
                    iconSize={10}
                    padding={5}
                    width={400}
                    margin={5}
                    formatter={renderColorfulLegendText}
                />
                <Pie
                    // Tooltip shows up when hovering the pie itself
                    onMouseEnter={() => setShowTooltip(true)}
                    isAnimationActive={false}
                    data={data01}
                    dataKey="value"
                    cx={180}
                    cy={190}
                    innerRadius={30}
                    outerRadius={100}
                    fill="#8884d8"
                    label
                />
                {showTooltip && (
                    <Tooltip
                        // Anymation is a bit weird when the tooltip shows up after hidding
                        isAnimationActive={false}
                        // Send props down to get the payload
                        content={<Tip setShowTooltip={setShowTooltip} />}
                        // We need this to manage visibility ourselves
                        wrapperStyle={{ visibility: "visible", pointerEvents: "auto" }}
                    />
                )}
            </PieChart></div>

    );
};
