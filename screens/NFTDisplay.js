import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

const NFTDisplay = ({ nftAddress }) => {
  const [nftData, setNftData] = useState(null);

  useEffect(() => {
    const fetchNFTData = async () => {
      const response = await fetch(`https://api.nftplatform.com/nft/${nftAddress}`);
      const data = await response.json();
      setNftData(data);
    };

    fetchNFTData();
  }, [nftAddress]);

  if (!nftData) return <Text>Loading...</Text>;

  return (
    <View>
      <Image source={{ uri: nftData.image }} style={{ width: 200, height: 200 }} />
      <Text>{nftData.name}</Text>
      <Text>{nftData.description}</Text>
    </View>
  );
};

export default NFTDisplay;
