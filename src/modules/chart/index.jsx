import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import ConnectedComponent from './view';
import { getChartModule } from './store';

export default function Dynamic(props) {
    return (
        <DynamicModuleLoader modules={[getChartModule()]}>
            <ConnectedComponent {...props} />
        </DynamicModuleLoader>
    );
}
