import { initializeConnector } from 'mac-web3-react-core'
import { Network } from 'mac-web3-react-network'
import { URLS } from '../chains'

export const [network, hooks] = initializeConnector<Network>(
  (actions) => new Network(actions, URLS),
  Object.keys(URLS).map((chainId) => Number(chainId))
)
