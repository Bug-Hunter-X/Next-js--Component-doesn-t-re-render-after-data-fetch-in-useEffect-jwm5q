```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setData({ message: 'Data fetched!' });
    };
    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}
```