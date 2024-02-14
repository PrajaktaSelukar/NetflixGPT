const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
        <h1 className="text-6xl font-bold">{ title }</h1>
        <p className="py-6 text-lg w-1/4">{ overview }</p>
        <div>
            <button className="bg-white text-black py-4 px-12 text-xl opacity-80 rounded-lg">▶️ Play</button>
            <button className="bg-gray-500 text-white mx-2 py-4 px-12 text-xl opacity-80 rounded-lg">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;