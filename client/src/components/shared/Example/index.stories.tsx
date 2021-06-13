import '../../../../src/App.css';
import Example from './index';
import { storiesOf } from '@storybook/react';

storiesOf('components/shared/Example', module)
    .add('default', () => <Example prop1={'Prop 1 Value, change stories files to edit'}
        prop2={'Prop 2 Value'}
        prop3={'Prop 3 Value'}
        prop4={'Prop 4 Value'} />)
