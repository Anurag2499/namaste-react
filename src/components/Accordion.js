import { useState } from 'react';

const Accordion = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const isOpen = false;
  console.log('check true or false', { isOpen });
  return (
    <div>
      <div className="w-[90%] mt-8 mx-auto rounded-lg">
        {
          <div key={group.card.card.title} className="mb-4">
            <div
              className="flex items-center justify-between p-4 bg-gray-200 w-[100%] cursor-pointer rounded-t-xl"
              // You can customize the click handler as per your requirements
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false);
                } else {
                  setIsOpen(true);
                }

                console.log('Clicked on group:', group);
              }}
            >
              <div className="text-lg font-semibold">
                {group.card.card.title}
              </div>
              <div className="transform transition-transform">
                {/* You can customize the icon based on your needs */}
                {isOpen ? '▼' : '▲'}
              </div>
            </div>
            {isOpen && (
              <div
                className={`overflow-hidden transition-max-height ${
                  isOpen ? 'max-h-full' : 'max-h-0'
                }`}
              >
                {' '}
                {console.log(group.card.card.itemCards)}
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-200 rounded-b-lg ">
                  {group.card.card.itemCards &&
                  Array.isArray(group.card.card.itemCards)
                    ? group.card.card.itemCards.map((item) => (
                        <p className="mb-2 text-gray-900 dark:text-gray-400">
                          {item.card.info.name} -- {'Rs.'}
                          {item.card.info.price / 100}
                        </p>
                      ))
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
