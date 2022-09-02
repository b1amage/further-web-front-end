import React, { useState } from "react";
import { IdealMatchForm } from "../components/idea_match/IdealMatchForm";
import { IdealMatchHeader } from "../components/idea_match/IdealMatchHeader";
import { SucessNotification } from "../components/idea_match/SucessNotification";

export const IdealMatch = () => {
  const [display, setDisplay] = useState(false)
  const [selectedType, setSelectedType] = useState("")
  const [error, setError] = useState("")
  const onChangeType = (e) => {
    setSelectedType(e.target.value)
  }

  const handleIdealSubmit = (e) => {
    e.preventDefault()
    // console.log(selectedType)
    if (selectedType){
      setDisplay(state => !state)
    }else{
      setError("* Please select 1 type")
    }
  }
  return (
    <>
      <div className="w-full h-auto flex justify-between flex-col">
        <IdealMatchHeader />
        <IdealMatchForm onChange={onChangeType} onSubmit={handleIdealSubmit} error={error}/>
        <SucessNotification display={display} />
      </div>
		</>
	);
};
