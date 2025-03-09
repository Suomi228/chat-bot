import { useState, useRef, useEffect } from "react";
import dalee from "../../../assets/gpt4.svg";
import gpt from "../../../assets/gpt3.5.svg";
import mj from "../../../assets/mj-white.svg";
import "./index.css";

type Model = {
  id: string;
  name: string;
  icon: string;
};

const MODELS: Model[] = [
  { id: "1", name: "ChatGPT", icon: gpt },
  { id: "2", name: "DALL-E", icon: dalee },
  { id: "3", name: "Midjourney", icon: mj },
];

export default function AiPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model | null>(MODELS[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="ai-picker" ref={dropdownRef}>
      <button
        className="picker-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="button-content">
          {selectedModel ? (
            <div className="selected-model">
              <img
                src={selectedModel.icon}
                alt={selectedModel.name}
                className="model-icon"
              />
              {selectedModel.name}
            </div>
          ) : (
            ""
          )}
        </div>
        <span className="arrow" />
      </button>

      {isOpen && (
        <div className="models-dropdown">
          {MODELS.map((model) => (
            <div
              key={model.id}
              className="model-item"
              onClick={() => {
                setSelectedModel(model);
                setIsOpen(false);
              }}
            >
              <img src={model.icon} alt={model.name} className="model-icon" />
              {model.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
