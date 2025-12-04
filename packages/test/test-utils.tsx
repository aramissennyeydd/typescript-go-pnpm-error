import React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions & { customLayerManager?: React.FC<any> }
): RenderResult =>
  render(ui, {
    wrapper: () => <></>,
    ...options,
  }) as RenderResult

export {customRender as render};