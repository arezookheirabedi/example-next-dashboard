'use client';
import React, { Fragment } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";

interface IModal {
  showModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title: string;
}

export function Modal(props: IModal) {
  const { showModal, closeModal, children, title } = props;

  const close = () => {
    closeModal();
  };

  return (
    <div>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50" onClose={close}>
          <div className="min-h-screen px-4 text-center">
            {/* Background Overlay */}
            <div className="fixed inset-0 z-40 " />
            
            {/* Modal Content */}
            <TransitionChild
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg relative w-96">
                  {/* Title */}
                  <h2 className="text-xl">{title}</h2>
                  
                  {/* Children Content (could be a Line component, or anything else) */}
                  {children}

                  {/* Close Button */}
                  <button
                    onClick={close}
                    className="absolute top-2 left-2 w-5 h-5 text-xl text-gray-600 hover:text-gray-900 focus:outline-none border-[1.5px] border-[#606060] rounded-md flex items-center justify-center"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
