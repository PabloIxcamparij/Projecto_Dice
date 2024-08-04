import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

export default function ModalWin({ isOpen, onClose, winner, winnerColor, winnerUnits }) {


  return (
    <Modal className="w-4/5" isOpen={isOpen} onOpenChange={onClose} placement="center">

      <ModalContent>

        <ModalHeader className="flex flex-col gap-1">The winer is</ModalHeader>

        <ModalBody className="flex items-center">
          <p className="text-2xl font-bold mb-5" style={{ color: winnerColor }}>{winner}</p>
          <p className="text-2xl font-bold mb-5" style={{ color: winnerColor }}>Units remaining {winnerUnits}</p>

        </ModalBody>

      </ModalContent>
    </Modal>
  );
}
