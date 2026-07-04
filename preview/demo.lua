-- hackerman preview: open this file with the theme active.
-- Comments are bright grey and italic.
-- TODO: todo tags get the full neon-block treatment

local http = require 'socket.http' -- require/builtins: purple

-- functions: spring green; keywords: neon bold
local Mainframe = {}
Mainframe.__index = Mainframe

function Mainframe.new(port)
  local self = setmetatable({}, Mainframe) -- `self`: purple italic
  self.port = port or 0x1f90 -- hex numbers: lime
  self.active = true -- booleans: purple
  return self
end

function Mainframe:breach(target, retries)
  retries = retries or 3.14 -- floats: lime
  local banner = ('breaching %s on port %d\n'):format(target, self.port) -- escapes: teal

  for attempt = 1, retries do
    if self.active and target ~= nil then -- nil is a builtin: purple italic
      return { id = 42, name = banner } -- strings: mint
    end
  end
  error 'access denied'
end

return Mainframe
