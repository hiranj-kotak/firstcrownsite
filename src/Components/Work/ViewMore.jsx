const ViewMoreCard = () => {
    return (
      <div className="flex-shrink-0 min-w-[375px] h-[480px] flex items-center justify-center bg-white rounded-2xl px-8 text-gray-900 shadow-md border">
        <div>
          <h3 className="text-3xl font-bold leading-tight mb-6">
            <span className="block">Much more</span>
            <span className="block">magnificence</span>
            <span className="block">still to be</span>
            <span className="block">discovered.</span>
          </h3>
          <a
            href="#"
            className="inline-flex items-center text-black font-semibold hover:underline"
          >
            More Work <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    )
  }
  
  export default ViewMoreCard
  