import { useState } from 'react';
import { CDN_URL } from '../utils/constants';

const Accordion = ({ group, isOpen, setShowIndex }) => {
  // const [isOpen, setIsOpen] = useState(false);   Initially i was managing the state here in this component
  console.log({ group });
  return (
    <div>
      <div className="w-[90%] mt-8 mx-auto rounded-lg">
        {
          <div key={group.card.card.title} className="mb-4">
            {/* Accordian Header*/}
            <div
              className="flex items-center justify-between p-4 bg-gray-200 w-[100%] cursor-pointer rounded-t-xl"
              // You can customize the click handler as per your requirements
              onClick={() => {
                // if (isOpen) {
                //   setIsOpen(false);
                // } else {
                //   setIsOpen(true);
                // }
                setShowIndex();
              }}
            >
              <div className="text-lg font-semibold">
                {group.card.card.title}({group.card.card.itemCards.length})
              </div>
              <div className="transform transition-transform">
                {/* You can customize the icon based on your needs */}
                {isOpen ? '▼' : '▲'}
              </div>
            </div>

            {/* Accordian Body */}
            {isOpen && (
              <div
                className={`overflow-hidden transition-max-height ${
                  isOpen ? 'max-h-full' : 'max-h-0'
                }`}
              >
                {' '}
                {console.log(group?.card?.card?.itemCards)}
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-200 rounded-b-lg ">
                  {group?.card?.card?.itemCards &&
                  Array.isArray(group?.card?.card?.itemCards)
                    ? group?.card?.card?.itemCards.map(
                        (item) => (
                          (key = item.card.info.id),
                          (
                            <div className="flex justify-between  border-gray-300 p-2 m-2   border-b-2">
                              <div className="w-[450px]">
                                <div className="py-2">
                                  <span> {item?.card?.info?.name} </span>
                                  <span>
                                    ₹
                                    {item?.card?.info?.defaultPrice
                                      ? item?.card?.info?.defaultPrice / 100
                                      : item?.card?.info?.price / 100}
                                  </span>
                                </div>
                                <p className="text-xs mr-12 ">
                                  {item?.card?.info?.description}
                                </p>
                              </div>
                              <div className="">
                                <div className="flex justify-around">
                                  <label className="absolute  flex items-center justify-center  bg-black m-2 p-2 rounded-lg text-white text-sm   w-14 h-8">
                                    Add +
                                  </label>
                                </div>
                                <img
                                  src={CDN_URL + item?.card?.info?.imageId}
                                  className="w-28 h-28 p-2 mb-4 rounded-lg shadow-lg  border border-gray-300 border-lg "
                                />
                              </div>
                            </div>
                          )
                        )
                      )
                    : null}
                </div>
              </div>
            )}
          </div>
        }
      </div>
      <div className="bg-green-400  w-[90%]   mt-8 mx-auto flex justify-center items-center h-[1px] m-2 ">
        {' '}
      </div>
    </div>
  );
};

export default Accordion;
