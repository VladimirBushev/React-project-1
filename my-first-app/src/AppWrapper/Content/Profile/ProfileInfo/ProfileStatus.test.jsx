import React from 'react';
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';

describe('Profile status component', () => {
    test('status from props should in the state', () => {
        const component = create(<ProfileStatus status='круто'/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe('круто')
    })
})