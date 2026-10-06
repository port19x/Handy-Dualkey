import React from "react";
import { useTranslation } from "react-i18next";
import { useSettings } from "../../hooks/useSettings";
import { useModelStore } from "../../stores/modelStore";
import { getTranslatedModelName } from "../../lib/utils/modelTranslation";
import { SettingContainer } from "../ui/SettingContainer";

interface ShortcutModelSelectorProps {
  shortcutId: "transcribe" | "transcribe_secondary";
  grouped?: boolean;
}

export const ShortcutModelSelector: React.FC<ShortcutModelSelectorProps> = ({
  shortcutId,
  grouped = false,
}) => {
  const { t } = useTranslation();
  const { getSetting, updateSetting, isUpdating } = useSettings();
  const { models, currentModel } = useModelStore();
  const downloadedModels = models.filter((model) => model.is_downloaded);
  const settingKey =
    shortcutId === "transcribe"
      ? "primary_shortcut_model"
      : "secondary_shortcut_model";
  const storedModel = getSetting(settingKey) || "";
  const selectedModel =
    shortcutId === "transcribe" ? storedModel || currentModel : storedModel;

  return (
    <SettingContainer
      title={t(
        "settings.general.shortcut.shortcutModels." + shortcutId + ".name",
      )}
      description={t(
        "settings.general.shortcut.shortcutModels." +
          shortcutId +
          ".description",
      )}
      descriptionMode="tooltip"
      grouped={grouped}
      layout="horizontal"
    >
      <select
        className="max-w-56 rounded-md border border-mid-gray/30 bg-background px-2 py-1 text-sm text-text"
        value={selectedModel}
        disabled={isUpdating(settingKey)}
        onChange={(event) => updateSetting(settingKey, event.target.value)}
        aria-label={t(
          "settings.general.shortcut.shortcutModels." + shortcutId + ".name",
        )}
      >
        {shortcutId === "transcribe_secondary" && (
          <option value="">
            {t("settings.general.shortcut.shortcutModels.chooseModel")}
          </option>
        )}
        {downloadedModels.map((model) => (
          <option key={model.id} value={model.id}>
            {getTranslatedModelName(model, t)}
          </option>
        ))}
      </select>
    </SettingContainer>
  );
};
