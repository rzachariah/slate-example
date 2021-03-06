// @ts-ignore - Imports will be there from the upstream patch
import { createHyperscript, createText } from 'slate-hyperscript'
/**
 * This is the mapping for the JSX that creates editor state. Add to it as needed.
 * The h prefix isn't needed. It's added to be consistent and to let us know it's
 * hyperscript.
 */
export const jsx = createHyperscript({
  elements: {
    hp: { type: 'paragraph' },
    hbulletedlist: { type: 'bulleted-list' },
    hlistitem: { type: 'list-item' },
    inline: { inline: true },
    block: {},
    wrapper: {},
  },
  creators: {
    htext: createText,
  },
})
