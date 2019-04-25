import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import ConnectedComponent from './components';
import { getQuotesModule } from './store';

export default function Dynamic() {
    return (
        <DynamicModuleLoader modules={[getQuotesModule()]}>
            <ConnectedComponent />
        </DynamicModuleLoader>
    );
}
