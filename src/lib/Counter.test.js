import { render, screen } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'

import Counter from './Counter.svelte'

test('greeting appears on click', async () => {
    const user = userEvent.setup()
    render(Counter)

    const button = screen.getByRole('button')
    await user.click(button)
    const greeting = screen.getByText(/1/iu)
    expect(greeting).toBeInTheDocument()
    await user.click(button)
    expect(screen.getByText(/2/iu)).toBeInTheDocument()

})