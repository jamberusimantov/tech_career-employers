import "./style.css";

// run npm run storybook on client directory and try to change the following props values
// notice the changes on the storybook page
const Example = (props: any): any => {
    const { prop1, prop2, prop3, prop4 } = props;
    return (
        <div className="welcome-storybook-page">
            <div>Tech Career Storybook Test Page, change props in index.stories.tsx to see the change here</div>
            <div className="props-test">
                <div className="prop-value">Prop 1 value: {prop1}</div>
                <div className="prop-value">Prop 2 value: {prop2}</div>
                <div className="prop-value">Prop 3 value: {prop3}</div>
                <div className="prop-value">Prop 4 value: {prop4}</div>
            </div>
        </div>
    )
}
export default Example;