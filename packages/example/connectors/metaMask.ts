import { initializeConnector } from '@mac-web3-react/core'
import { MetaMask } from '@mac-web3-react/metamask'

export const [metaMask, hooks] = initializeConnector<MetaMask>((actions) => new MetaMask(actions))
