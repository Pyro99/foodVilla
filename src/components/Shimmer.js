const Shimmer = () => {
    return (
      <div className="restaurants">
        {Array(15).fill("").map((e,index) => (
          <div key = {index} className="shimmer_card"></div>
        ))}
      </div>
    );
}

export default Shimmer;