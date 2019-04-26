import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import ConnectedComponent from './view';
import { getQuotesModule } from './store';

export default function Dynamic(props) {
    return (
        <DynamicModuleLoader modules={[getQuotesModule()]}>
            <ConnectedComponent {...props} />
        </DynamicModuleLoader>
    );
}
