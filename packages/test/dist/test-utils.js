import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
const customRender = (ui, options) => render(ui, {
    wrapper: () => _jsx(_Fragment, {}),
    ...options,
});
export { customRender as render };
//# sourceMappingURL=test-utils.js.map