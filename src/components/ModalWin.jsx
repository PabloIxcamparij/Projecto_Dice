import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

export default function ModalWin({ isOpen, onClose, winner, winnerColor }) {


  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      
      <ModalContent>

        <ModalHeader className="flex flex-col gap-1">The winer is</ModalHeader>
        
        <ModalBody>
        <p className="text-lg" style={{ color: winnerColor }}>{winner}</p>
        </ModalBody>

      </ModalContent>
    </Modal>
  );
}
