import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import ConnectedComponent from './view';
import { getNewsModule } from './store';

export default function Dynamic(props) {
    return (
        <DynamicModuleLoader modules={[getNewsModule()]}>
            <ConnectedComponent {...props} />
        </DynamicModuleLoader>
    );
}
