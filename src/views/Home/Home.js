import React, { useMemo } from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import useTokenBalance from '../../hooks/useTokenBalance';
import HomeImage from '../../assets/img/bg.png';
import AvaxLogo from '../../assets/img/joe.png';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useFantomPrice from '../../hooks/useFantomPrice.js';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { tomb as tombTesting, tShare as tShareTesting } from '../../tomb-finance/deployments/deployments.testing.json';
import { tomb as tombProd, tShare as tShareProd } from '../../tomb-finance/deployments/deployments.mainnet.json';

import { Box, Button, CardContent, Grid, Typography } from '@material-ui/core';
import Card from '../../components/Card';
import logo from '../../assets/img/logo.png';
import tvl from '../../assets/img/tvl.png';

import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
    backgroundImage: 'linear-gradient(0.25turn, #2C73D2, #00C9A7)',
  },
  tokenButton: {},
  '@media only screen and (max-width: 1200px)': {
    tokenButton: {
      fontSize: '12px',
      marginRight: '4%',
    },
  },
  flex: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  '@media only screen and (max-width: 850px)': {
    tokenButton: {
      width: '40% !important',
    },
  },
  '@media only screen and (max-width: 670px)': {
    tokenButton: {
      width: '80% !important',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats('SNO-JOE-LP');
  const tShareFtmLpStats = useLpStats('SNOSHARE-JOE-LP');
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();
  const { price: JOEPrice, marketCap: JOEMarketCap, priceChange: JOEPriceChange } = useFantomPrice();

  let tomb;
  let tShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    tomb = tombTesting;
    tShare = tShareTesting;
  } else {
    tomb = tombProd;
    tShare = tShareProd;
  }

  const buyTombAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D';
  const buyTShareAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875';

  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );
  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tombCirculatingSupply = useMemo(() => (tombStats ? String(tombStats.circulatingSupply) : null), [tombStats]);
  const tombTotalSupply = useMemo(() => (tombStats ? String(tombStats.totalSupply) : null), [tombStats]);

  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats],
  );
  const tSharePriceInFTM = useMemo(
    () => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null),
    [tShareStats],
  );
  const tShareCirculatingSupply = useMemo(
    () => (tShareStats ? String(tShareStats.circulatingSupply) : null),
    [tShareStats],
  );
  const tShareTotalSupply = useMemo(() => (tShareStats ? String(tShareStats.totalSupply) : null), [tShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInFTM = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const Row = styled.div`
    font-family: Quicksand, cursive;
    align-items: center;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 8px;
  `;

  return (
    <Page>
      <BackgroundImage />
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} style={{ textAlign: 'center' }}>
          <img src={`${logo}`} alt="logo" style={{ borderRadius: '50%' }} />
        </Grid>
        <Grid item sm={12} md={6} container direction="column" style={{ justifyContent: 'space-between' }}>
          <Typography variant="h1" style={{ fontWeight: 900, textAlign: 'center' }}>
            Welcome to WALRUS
          </Typography>
          <Card>
            <CardContent
              style={{ margin: '37px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
            >
              <div>
                <h1>Total Value Locked</h1>
                <CountUp style={{ fontSize: '40px' }} end={TVL} separator="," prefix="$" />
              </div>
              <img src={`${tvl}`} alt="tvl" style={{ width: 128, height: 128 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>WLRS-UST LP</h2>
              <Box mt={2}>
                <TokenSymbol symbol="SNO-JOE-LP" />
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
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
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>WSHARE-UST LP</h2>
              <Box mt={2}>
                <TokenSymbol symbol="SNOSHARE-JOE-LP" />
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <Box align="center" mt={2}>
                <TokenSymbol symbol="WFTM" />
              </Box>
              <h2 align="center">UST</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>${JOEPrice ? JOEPrice : '-.----'}</span>
              </Box>
              <Box align="center" marginBottom={3}>
                &nbsp;
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap:
                  <br />
                  24h Price Change: <br />
                  &nbsp;
                </span>
                <span style={{ fontSize: '14px' }}>
                  ${JOEMarketCap} <br />
                  {JOEPriceChange.toFixed(2)}% <br />
                  &nbsp;
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={'https://traderjoexyz.com/trade?outputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd#/'}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <Box align="center" mt={2}>
                <TokenSymbol symbol="TOMB" />
              </Box>
              <h2 align="center">WLRS</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>
                  {tombPriceInFTM ? tombPriceInFTM : '-.----'}{' '}
                  <img alt="logo" style={{ width: '30px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
                  ${tombPriceInDollars ? tombPriceInDollars : '-.--'}
                </span>
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap:
                  <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '14px' }}>
                  ${((tombCirculatingSupply - 20000) * tombPriceInDollars).toFixed(2)} <br />
                  {tombCirculatingSupply - 20000} <br />
                  {tombTotalSupply}
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={buyTombAddress}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <Box align="center" mt={2}>
                <TokenSymbol symbol="HSHARE" />
              </Box>
              <h2 align="center">WSHARE</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>
                  {tSharePriceInFTM ? tSharePriceInFTM : '-.----'}{' '}
                  <img alt="logo" style={{ width: '30px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '16px' }}>${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}</span>
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap: <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '14px' }}>
                  ${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)} <br />
                  {tShareCirculatingSupply} <br />
                  {tShareTotalSupply}
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={buyTShareAddress}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <Box align="center" mt={2}>
                <TokenSymbol symbol="HBOND" />
              </Box>
              <h2 align="center">WBOND</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>
                  {tBondPriceInFTM ? tBondPriceInFTM : '-.----'}{' '}
                  <img alt="logo" style={{ width: '30px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '16px' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</span>
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap: <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '14px' }}>
                  ${(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)} <br />
                  {tBondCirculatingSupply} <br />
                  {tBondTotalSupply}
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href="/bonds"
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                >
                  Bond
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

const StyledValue = styled.div`
  //color: ${(props) => props.theme.color.grey[300]};
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1%;
`;

export default Home;
