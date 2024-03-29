import React from "react";
import { TokenPairImageProps, variants } from "./types";
import { StyledPrimaryImage, StyledSecondaryImage } from "./styles";
import Wrapper from "./Wrapper";

const TokenPairImage: React.FC<TokenPairImageProps> = ({
  primarySrc,
  secondarySrc,
  width,
  height,
  variant = variants.DEFAULT,
  primaryImageProps = {},
  secondaryImageProps = {},
  ...props
}) => {
  const subWidth = Math.floor(width / 2);

  return (
    <Wrapper position="relative" width={width} height={height} {...props}>
      <StyledPrimaryImage variant={variant} src={primarySrc} width={subWidth} height={height} {...primaryImageProps} />
      <StyledSecondaryImage
        variant={variant}
        src={secondarySrc}
        width={subWidth}
        height={height}
        {...secondaryImageProps}
      />
    </Wrapper>
  );
};

export default TokenPairImage;
