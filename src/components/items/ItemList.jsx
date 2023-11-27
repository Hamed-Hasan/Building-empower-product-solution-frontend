/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../Table/Table.css'
import { BiShowAlt } from 'react-icons/bi';
import { MdAddchart } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import SearchBar from '../../common/SearchBar';
import Loading from '../../shared/Loading/Loading';


const ItemList = () => {

    const [loading, setLoading] = useState(false);

    // sourcery skip: combine-object-destructuring
    const { isOpen: isShowModalOpen, onOpen: onShowModalOpen, onClose: onShowModalClose } = useDisclosure();
    const { isOpen: isAddModalOpen, onOpen: onAddModalOpen, onClose: onAddModalClose } = useDisclosure();
    const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onClose: onEditModalClose } = useDisclosure();

    const handleShowModal = () => {
        onShowModalOpen();
    };

    const handleAddModal = () => {
        onAddModalOpen();
        // Implement any additional logic or state handling for the Add modal
    };

    const handleEditModal = () => {
        onEditModalOpen();
    };





    return (
        <div className="flex justify-center">
            <div className="container mx-auto">

                {/* SearchBar component */}
                <SearchBar
                    //   searchQuery={searchQuery}
                    //   setSearchQuery={setSearchQuery}
                    //   handleSearch={handleSearch}
                    loading={loading}
                />

                {/* {loading ? (
          <Loading />
        ) : ( */}
                <>
                    {/* Display table data here */}
                    <div class="flex items-center justify-center  bg-gray-900">
                        <div class="col-span-12">
                            <div class="overflow-auto lg:overflow-visible ">
                                <table class="blog-table text-gray-400 border-separate space-y-6 text-sm">
                                    <thead class="bg-gray-800 text-gray-500">
                                        <tr>
                                            <th class="p-3">Brand</th>
                                            <th class="p-3 text-left">Category</th>
                                            <th class="p-3 text-left">Price</th>
                                            <th class="p-3 text-left">Status</th>
                                            <th class="p-3 text-left">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="bg-gray-800">
                                            <td class="p-3">
                                                <div class="flex align-items-center">

                                                    <div class="ml-3">
                                                        <div class="">Samsung</div>
                                                        <div class="text-gray-500">mail@rgmail.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="p-3">
                                                Technology
                                            </td>
                                            <td class="p-3 font-bold">
                                                200.00$
                                            </td>
                                            <td class="p-3">
                                                <span class="bg-yellow-400 text-gray-50  rounded-md px-2">start sale</span>
                                            </td>
                                            <td className="blog-td p-3 flex justify-start gap-5 items-center mt-3">
                                                <a href="#" className="text-gray-400 hover:text-gray-100 mr-2" onClick={() => handleShowModal()}>
                                                    <BiShowAlt size={18} />
                                                </a>
                                                <a href="#" className="text-gray-400 hover:text-gray-100 ml-2" onClick={() => handleAddModal()}>
                                                    <MdAddchart />
                                                </a>
                                                <a href="#" className="text-gray-400 hover:text-gray-100 ml-2" onClick={() => handleEditModal()}>
                                                    <FiEdit3 />
                                                </a>
                                                <a href="#" className="text-gray-400 hover:text-gray-100 ml-2" onClick={() => handleDeleteBlog()}>
                                                    <RiDeleteBin6Line />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pagination component */}

                </>
                {/* )} for loading */}

                {/* Show Modal */}

                <Modal isCentered isOpen={isShowModalOpen} onClose={onShowModalClose} size='xl'>
                    <ModalOverlay
                        bg='blackAlpha.300'
                        backdropFilter='blur(10px) hue-rotate(90deg)'
                    />
                    <ModalContent>

                        <>

                            <ModalCloseButton />

                            <main class="mt-10">

                                <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: '24em' }}>
                                    <div class="absolute left-0 bottom-0 w-full h-full z-10"
                                        style={{
                                            backgroundImage: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))',
                                        }}></div>
                                    {/* <img src={selectedBlog.image} /> */}
                                    <div class="p-4 absolute bottom-0 left-0 z-20">
                                        <a href="#"
                                            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">badges</a>
                                        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                                            title
                                        </h2>
                                        <div class="flex mt-3">
                                            <div>
                                                <p class="font-semibold text-gray-200 text-sm">Author </p>
                                                <p class="font-semibold text-gray-400 text-xs">Published </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="px-4 lg:px-0 mt-12 text-gray-400 max-w-screen-md mx-auto text-lg leading-relaxed">






                                </div>
                            </main>
                        </>

                    </ModalContent>
                </Modal>


                {/* Add Modal */}
                {/* Implement your Add modal content here */}
                <Modal isCentered isOpen={isAddModalOpen} onClose={onAddModalClose} size='2xl'>
                    {/* Add modal content */}
                    {/* Implement your Add modal content here */}
                    <ModalOverlay
                        bg='blackAlpha.300'
                        backdropFilter='blur(10px) hue-rotate(90deg)'
                    />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Add modal body */}
                            {/* Implement your Add modal body content here */}
                            {/* <AddBlog onClose={onAddModalClose}/> */}
                            add
                        </ModalBody>
                    </ModalContent>
                </Modal>

                {/* Edit Modal */}
                <Modal isCentered isOpen={isEditModalOpen} onClose={onEditModalClose}>
                    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
                    <ModalContent>
                        <ModalHeader color="whiteAlpha.800">Edit Blog</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Display the BlogUpdateForm component */}
                            update blog
                        </ModalBody>
                    </ModalContent>
                </Modal>

            </div>
        </div>
    );
};

export default ItemList;