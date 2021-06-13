import '../../../../src/App.css';
import CodeinTable from './index';
import { storiesOf } from '@storybook/react';
import { coursesColumns, coursesData, graduatesColumns, graduatesData } from './mock'

storiesOf('components/shared/CodinTable', module)
    .add('coursesTable', () => <CodeinTable getData={() => { return coursesData }} columns={coursesColumns} />)

storiesOf('components/shared/CodinTable', module)
    .add('graduatesTable', () => <CodeinTable getData={() => { return graduatesData }} columns={graduatesColumns} />)
