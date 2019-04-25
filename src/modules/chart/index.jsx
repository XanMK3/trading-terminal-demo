import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import ConnectedComponent from './components';
import { getChartModule } from './store';

export default function Dynamic() {
    return (
        <DynamicModuleLoader modules={[getChartModule()]}>
            <ConnectedComponent />
        </DynamicModuleLoader>
    );
}
