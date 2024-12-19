```javascript
import React, { useCallback, useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const myFunction = useCallback(() => {
    // ...some code...
  }, []); // Empty dependency array means it only changes on mount

  useEffect(() => {
    console.log('Effect running!');
  }, [myFunction]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;
```