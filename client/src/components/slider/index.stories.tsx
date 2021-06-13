import '../../../src/App.css';
import Slider from './Slider';
import { storiesOf } from '@storybook/react';

storiesOf('components/slider', module)
    .add('default', () => <Slider />)

