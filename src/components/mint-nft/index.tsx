import { Button, NftMintContent, NftMintWrapper, Paragraph, Title } from "./style";

export function MintNft(){
    return (
      <NftMintWrapper>
        <NftMintContent>
          <Title>Mint your free NFT 🎉</Title>
          <Paragraph>
            We are rewarding the first 50 people who enter the site by giving a
            free NFT from the Solana Network. To get your nft just click on the
            button below!
          </Paragraph>

          <Button>
            Mint Nft
          </Button>
        </NftMintContent>
      </NftMintWrapper>
    );
}