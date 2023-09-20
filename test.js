import React from 'react'
import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithContext } from '../../../../../testUtils/Account/renderWithContext';

import NoAccounts from '../../../../../../src/applets/common/Account/AccountList/NoAccounts';

describe('NoAccounts', () => {
  test('shows no accounts message', async () => {
    renderWithContext(<NoAccounts />);

    const noAccounts = await screen.findByText(/No accounts found/);

    expect(noAccounts).toBeTruthy();
  });
});
