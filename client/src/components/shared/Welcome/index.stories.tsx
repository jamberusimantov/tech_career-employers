import '../../../../src/App.css';
import Welcome from './index';

export default {
    title: 'Welcome',
    component: Welcome
}

export const Default = () => <Welcome prop1={'AAA'} prop2={'BBB'} prop3={'CCC'} prop4={'DDD'} />;
