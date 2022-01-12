import { initializeConnector } from 'mac-web3-react-core'
import { Frame } from 'mac-web3-react-frame'

export const [frame, hooks] = initializeConnector<Frame>((actions) => new Frame(actions, undefined, false))
