import { TrustRelay } from "./TrustRelay"
import { WalletLink } from "./WalletLink"
import { WalletLinkProvider } from "./WalletLinkProvider"
import { WalletLinkRelay } from "./WalletLinkRelay"

export class Trust {
  public static TrustWeb3Provider(
    jsonRpcUrl: string,
    chainId: number = 1
  ): WalletLinkProvider {
    const trustRelay = new TrustRelay()
    const walletLink = new WalletLink({
      relay: trustRelay,
      appName: "Trust",
      appLogoUrl: ""
    })
    return walletLink.makeWeb3Provider(
      jsonRpcUrl,
      chainId,
      (trustRelay as unknown) as WalletLinkRelay
    )
  }
}
