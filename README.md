# hackerman.nvim

A Neovim colorscheme for translucent black terminals: neon green syntax, bright
green-tinted greys, teal diagnostics, and purple for the magic bits. `Normal`
has no background, so your terminal's translucency (e.g. Ghostty's
`background-opacity`) shows through.

<!-- TODO: screenshot -->

## Palette

| role | color | |
| --- | --- | --- |
| keywords | `#39ff14` | neon |
| functions | `#00ff9f` | spring |
| strings | `#8affc1` | mint |
| numbers, constants | `#b7ff5c` | lime |
| types | `#5fffd7` | aqua |
| booleans, builtins, preproc | `#c46bff` | purple |
| info / hint | `#17f5d3` | teal |
| errors / warnings | `#ff4d4d` / `#ffe75c` | |
| normal text | `#d7ffe0` | pale mint |
| comments | `#a5c9b8` | bright grey, on purpose |

## Install

Any plugin manager works; the theme is a single self-contained file with no
dependencies and no `setup()`.

Built-in `vim.pack` (Neovim 0.12+):

```lua
vim.pack.add { 'https://github.com/OwaisQuadri/hackerman.nvim' }
vim.cmd.colorscheme 'hackerman'
```

[lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
{
  'OwaisQuadri/hackerman.nvim',
  priority = 1000,
  config = function()
    vim.cmd.colorscheme 'hackerman'
  end,
}
```

Or skip the plugin manager entirely: copy `colors/hackerman.lua` into
`~/.config/nvim/colors/` and run `:colorscheme hackerman`.

## Requirements

- `termguicolors` enabled (the default in modern Neovim)
- The translucent background comes from your **terminal**, not the theme. In
  Ghostty, for example: `background-opacity = 0.85`. In an opaque terminal you
  just get solid black, which also looks fine.

## Covered

Standard syntax groups, treesitter, LSP semantic tokens and references,
diagnostics, diffs, gitsigns, Telescope, which-key, fidget, and `:terminal`
ANSI colors (0–15).

## License

MIT
