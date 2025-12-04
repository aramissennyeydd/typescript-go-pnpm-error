From the packages/test directory run `pnpm run tsgo`. You should see the following error message.

➜ pnpm run tsgo   

> test@1.0.0 tsgo /Projects/tsgo-errors/packages/test
> tsgo

test-utils.tsx:4:7 - error TS2742: The inferred type of 'customRender' cannot be named without a reference to '.pnpm/@testing-library+dom@10.4.1/node_modules/@testing-library/dom/types/queries'. This is likely not portable. A type annotation is necessary.

4 const customRender = (
        ~~~~~~~~~~~~


Found 1 error in test-utils.tsx:4