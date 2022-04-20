import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import Card from '../../components/Card';

import TokenSymbol from '../../components/TokenSymbol';
import useLpStats from '../../hooks/useLpStats';
import useCashStat from '../../hooks/useCashPriceInEstimatedTWAP.ts';

const CemeteryCard = () => {
  const tombFtmLpStats = useLpStats('SNO-JOE-LP');
  const tShareFtmLpStats = useLpStats('SNOSHARE-JOE-LP');
  const snoSnoShareLpStats = useLpStats('SNO-SNOSHARE-LP');
  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const snoSnoShareLPStats = useMemo(() => (snoSnoShareLpStats ? snoSnoShareLpStats : null), [snoSnoShareLpStats]);
  const snoPrice = useCashStat();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              WLRS-UST-LP
            </Typography>
            <Box mt={1}>
              <TokenSymbol symbol="SNO-JOE-LP" />
            </Box>
            <Box mt={2}></Box>
            <Box mt={2}>
              <span style={{ fontSize: '23px' }}>
                {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} WLRS /{' '}
                {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} UST
              </span>
            </Box>
            <Box>${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'}</Box>
            <span style={{ fontSize: '12px' }}>
              Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
              Total supply: {tombLPStats?.totalSupply ? tombLPStats.totalSupply : '-.--'}
            </span>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoJoeLPSnoShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd"
            >
              Add Liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              WSHARE-UST-LP
            </Typography>
            <Box mt={1}>
              <TokenSymbol symbol="SNOSHARE-JOE-LP" />
            </Box>
            <Box mt={2}></Box>
            <Box mt={2}>
              <span style={{ fontSize: '23px' }}>
                {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} WSHARE /{' '}
                {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} UST
              </span>
            </Box>
            <Box>${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}</Box>
            <span style={{ fontSize: '12px' }}>
              Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
              <br />
              Total supply: {tshareLPStats?.totalSupply ? tshareLPStats.totalSupply : '-.--'}
            </span>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoShareJoeLPSnoShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd"
            >
              Add Liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              SNO-SNOSHARE-LP
            </Typography>
            <Box mt={1}>
              <TokenSymbol symbol="SNO-SNOSHARE-LP" />
            </Box>
            <Box mt={2}></Box>
            <Box mt={2}>
              <span style={{ fontSize: '23px' }}>
                {snoSnoShareLPStats?.ftmAmount ? snoSnoShareLPStats?.ftmAmount : '-.--'} SNO /{' '}
                {snoSnoShareLPStats?.tokenAmount ? snoSnoShareLPStats?.tokenAmount : '-.--'} SNOSHARE
              </span>
            </Box>
            <Box>${snoSnoShareLPStats?.priceOfOne ? snoSnoShareLPStats.priceOfOne : '-.--'}</Box>
            <span style={{ fontSize: '12px' }}>
              Liquidity: ${snoSnoShareLPStats?.totalLiquidity ? snoSnoShareLPStats.totalLiquidity : '-.--'}
              <br />
              Total supply: {snoSnoShareLPStats?.totalSupply ? snoSnoShareLPStats.totalSupply : '-.--'}
            </span>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoSnoShareLPSnoShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D/0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875"
            >
              Add Liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              WLRS
            </Typography>
            <Box mt={1}>
              <TokenSymbol symbol="SNO" />
            </Box>
            <Box mt={2}>SINGLE STAKE</Box>
            <Box>${snoPrice?.priceInDollars ? snoPrice?.priceInDollars : '-.--'}</Box>
            <span style={{ fontSize: '12px' }}>
              Circulating Supply: ${snoPrice?.circulatingSupply ? snoPrice?.circulatingSupply : '-.--'}
              <br />
              Total supply: {snoPrice?.totalSupply ? snoPrice.totalSupply : '-.--'}
            </span>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoSnoShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D"
            >
              Buy SNO
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CemeteryCard;
