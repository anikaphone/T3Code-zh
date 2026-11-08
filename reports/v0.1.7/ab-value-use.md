# A/B 值用途重名 v0.1.7

A（JSX 文本/子表达式）和 B 原始白名单属性的文字，即使同一文本也出现在「从不转换」的值用途位置（比较、`switch case`、`as const`、字面量类型、对象键），仍照常转换——它们只用于显示。§4 要求把这些位置列出以便人工核对：若上游将来改成拿这些字段做判断，就需要改判定。

共 319 处显示位置（145 条文字）。此清单与 suspicious、可翻译计数分开统计，不计入可翻译位置总数。

### `Retry`（A，message，18 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/MermaidDiagram.tsx:308`（A，DiagramError）；`apps/web/src/components/chat/ThreadFindBar.tsx:101`（A，ThreadFindBar）；`apps/web/src/components/chat/TimelineWorkEntryRow.tsx:266`（A，WorkEntryLogRow）；`apps/web/src/components/chat/useAutoBalanceUpdateBanner.tsx:133`（B，useAutoBalanceUpdateBanner）；`apps/web/src/components/chat/useProjectCloneBanner.tsx:123`（A，useProjectCloneBanner）；`apps/web/src/components/chat/useSystemComposerBanners.tsx:247`（B，useSystemComposerBanners）；`apps/web/src/components/device/DeviceHostUpdates.tsx:58`（A，DeviceHostUpdates）；`apps/web/src/components/device/DevicePanel.tsx:275`（A，DevicePanel）；`apps/web/src/components/onboarding/FirstRunGate.tsx:216`（A，FirstRunRecovery）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:1165`（A，AgentInstallTerminal）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:1520`（A，ImportStep）；`apps/web/src/components/pullRequest/PullRequestActivityUnavailableState.tsx:30`（A，PullRequestActivityUnavailableState）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:869`（A，renderCodeViewFooter）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1585`（A，PullRequestCodeTab）；`apps/web/src/components/pullRequest/PullRequestsPage.tsx:1199`（A，PullRequestsPage）；`apps/web/src/components/pullRequest/PullRequestsUnavailableState.tsx:41`（A，PullRequestsUnavailableState）；`apps/web/src/components/settings/ConnectionsSettings.tsx:790`（A，renderWslRow）；`apps/web/src/components/sidebar/SidebarUpdateCapsule.tsx:171`（A，SidebarUpdateCapsule）
- 同一文本作为值用途字面量出现 1 次：`packages/source-control-github/src/server/GitHubRequestPolicy.ts:433`（as-const）

### `Off`（B，message，13 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:308`（B，EffortRows）；`apps/web/src/components/chat/TraitsPicker.tsx:470`（A，TraitsMenuContent）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.tsx:31`（A，MobileClientStatusBadge）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:377`（A，ConnectionStep）；`apps/web/src/components/settings/ConnectionsSettings.tsx:867`（A，renderWslRow）；`apps/web/src/components/settings/LoadBalancingSettings.tsx:68`（B，LoadBalancingSettings）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:628`（A，ProjectOverrideInheritance）；`apps/web/src/components/settings/PullRequestRoutingSettings.tsx:65`（B，PullRequestRoutingSettings）；`apps/web/src/components/settings/SnapShotSettings.tsx:485`（A，SnapShotSettings）；`apps/web/src/components/settings/SnapShotSettings.tsx:502`（A，SnapShotSettings）；`apps/web/src/components/settings/StorageSettings.tsx:164`（A，RetentionControl）；`apps/web/src/components/settings/StorageSettings.tsx:552`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:558`（A，WorktreeCleanupSection）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:470`（never-attribute）；`packages/shared/src/otelEnvironment.ts:17`（object-key）；`packages/shared/src/otelEnvironment.ts:369`（object-key）

### `Done`（A，message，12 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:884`（A，PublishRepositoryDialog）；`apps/web/src/components/GitActionsControl.tsx:1713`（A，GitActionsControl）；`apps/web/src/components/chat/GuestShareControls.tsx:149`（A，GuestShareDialog）；`apps/web/src/components/cloud/ConnectOnboardingDialog.tsx:299`（A，ConfiguredConnectOnboardingDialog）；`apps/web/src/components/device/DeviceSetup.tsx:263`（A，DeviceSetup）；`apps/web/src/components/settings/AuthorizedClientsSettings.tsx:376`（A，PairingLinkListRow）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:321`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BrowserImportWizard.tsx:548`（A，DoneStep）；`apps/web/src/components/settings/CaptureShortcutConfig.tsx:210`（A，CaptureShortcutConfig）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:95`（A，ProviderWizardAuthenticationStep）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1005`（A，WebhookDeliveriesDialog）；`apps/web/src/components/settings/SnapShotSetupDialog.tsx:466`（A，SnapShotSetupDialog）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/threadActivityAnnouncement.ts:10`（as-const）；`packages/source-control-github/src/server/GitHubRequestPolicy.ts:436`（as-const）；`packages/source-control-github/src/server/GitHubRequestPolicy.ts:448`（comparison）

### `Close`（B，message，9 处）

- 显示位置（照常转换）：`apps/web/src/components/AppRouteModal.tsx:76`（B，AppRouteModalClose）；`apps/web/src/components/chat/HtmlRenderDialog.tsx:30`（B，HtmlRenderDialog）；`apps/web/src/components/files/AttachmentFilePreview.tsx:464`（B，AttachmentFilePreview）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:1169`（A，AgentInstallTerminal）；`apps/web/src/components/settings/BrowserImportWizard.tsx:576`（A，BlockedStep）；`apps/web/src/components/settings/ProjectFaviconPickerDialog.tsx:87`（B，ProjectFaviconPickerDialog）；`apps/web/src/components/settings/SnapShotSetupDialog.tsx:389`（A，SnapShotSetupDialog）；`apps/web/src/components/ui/dialog.tsx:122`（B，DialogPopup）；`apps/web/src/components/ui/sheet.tsx:116`（B，SheetPopup）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/backend/DesktopBackendPool.ts:101`（ts-type）；`apps/desktop/src/backend/DesktopBackendPool.ts:270`（as-const）

### `Default`（A，message，9 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:205`（A，ColumnRow）；`apps/web/src/components/chat/ComposerModelEffort.tsx:209`（A，ColumnRow）；`apps/web/src/components/chat/ComposerModelEffort.tsx:448`（A，OptionMenuRow）；`apps/web/src/components/chat/TraitsPicker.tsx:106`（A，DefaultBadge）；`apps/web/src/components/settings/AuthorizedClientsSettings.tsx:910`（A，AdvertisedEndpointListRow）；`apps/web/src/components/settings/CustomModelEditor.tsx:166`（A，renderChoice）；`apps/web/src/components/settings/DeviceHostEditor.tsx:178`（B，DeviceHostEditorForm）；`apps/web/src/components/settings/IntegrationsSettings.tsx:1397`（A，BrowserProfilesSetting）；`apps/web/src/components/settings/StorageSettings.tsx:90`（B，WorktreesDirectoryRow）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/device/DeviceControlsRail.tsx:172`（as-const）；`apps/web/src/components/files/officeArchive.ts:557`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:917`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:952`（comparison）

### `Sign in`（A，message，8 处）

- 显示位置（照常转换）：`apps/web/src/components/HostedEmptyState.tsx:86`（A，T3ConnectSteps）；`apps/web/src/components/cloud/ConnectCliAuthSurface.tsx:83`（A，ConnectCliAuthorizeSurface）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:515`（A，ConnectAccountOption）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:1025`（A，AgentCard）；`apps/web/src/components/settings/LabsSettingsPanel.tsx:87`（A，GuestLinksRowWithSignIn）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:306`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:70`（A，ProviderWizardAuthenticationStep）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:557`（A，ConfiguredCloudLinkRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:9`（as-const）

### `Mixed`（B，message，7 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BranchNamingSettings.tsx:105`（B，BranchNamingSettings）；`apps/web/src/components/settings/ProjectDefaultsSettings.tsx:199`（A，ProjectDefaultsSettings）；`apps/web/src/components/settings/ProjectDefaultsSettings.tsx:377`（A，ProjectDefaultsSettings）；`apps/web/src/components/settings/SettingsPanels.tsx:1582`（B，ThreadsSettingsPanel）；`apps/web/src/components/settings/StorageSettings.tsx:90`（B，WorktreesDirectoryRow）；`apps/web/src/components/settings/StorageSettings.tsx:548`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:689`（A，WorktreeCleanupSection）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/usage/UsagePriceOverrides.tsx:202`（comparison）

### `Dismiss`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/browser/ServerBrowserSurface.tsx:878`（A，ServerBrowserSurface）；`apps/web/src/components/chat/GuestShareControls.tsx:309`（A，GuestPendingMessages）；`apps/web/src/components/chat/useThreadLifecycle.tsx:634`（B，useThreadLifecycle）；`apps/web/src/components/desktop/SshPasswordPromptDialog.tsx:212`（A，ActiveSshPasswordPrompt）；`apps/web/src/components/settings/DatabaseStorageNotice.tsx:62`（A，DatabaseStorageNotice）；`apps/web/src/components/sidebar/SidebarUpdateCapsule.tsx:175`（A，SidebarUpdateCapsule）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:320`（object-key）

### `None`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/components/AddProjectToMachineDialog.tsx:350`（A，AddProjectToMachineDialog）；`apps/web/src/components/device/DeviceToolVersions.tsx:69`（A，DeviceToolVersions）；`apps/web/src/components/pullRequest/PullRequestGhosts.tsx:332`（A，PullRequestDetailGhost）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:661`（A，PullRequestSummaryTab）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:735`（A，PullRequestSummaryTab）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1795`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 29 次：`apps/server/src/device/LocalDeviceHost.ts:349`（comparison）；`apps/server/src/guest/http.ts:145`（comparison）；`apps/server/src/guest/http.ts:179`（comparison）；`apps/server/src/guest/http.ts:198`（comparison）；`apps/server/src/process/agentScope.ts:139`（comparison）；`apps/server/src/process/agentScope.ts:149`（comparison）；`apps/server/src/process/agentScope.ts:193`（comparison）；`apps/server/src/process/agentScope.ts:228`（comparison）；`apps/server/src/process/agentScope.ts:337`（comparison）；`apps/server/src/process/agentScope.ts:356`（comparison）；…（共 29 处）

### `Unavailable`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ModelListRow.tsx:98`（A，ModelListRow）；`apps/web/src/components/chat/ProviderModelPicker.tsx:401`（A，ProviderModelPicker）；`apps/web/src/components/cloud/CloudEnvironmentConnectList.tsx:415`（A，CloudEnvironmentConnectRows）；`apps/web/src/components/files/AudioPreview.tsx:161`（A，AudioChip）；`apps/web/src/components/settings/CodexSetupSection.tsx:1094`（B，CodexManagedRuntimeFields）；`apps/web/src/components/settings/CodexSetupSection.tsx:1113`（B，CodexManagedRuntimeFields）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/ThreadDetailsUsage.tsx:73`（never-attribute）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1203`（never-attribute）；`apps/web/src/components/usage/UsagePriceOverrides.tsx:203`（comparison）

### `Loading`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3600`（A，Sidebar）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:380`（A，AcpSessionManagementSection）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:453`（A，AcpSessionManagementSection）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:478`（A，AcpSessionManagementSection）；`apps/web/src/components/ui/spinner.tsx:31`（B，Spinner）
- 同一文本作为值用途字面量出现 10 次：`apps/desktop/src/preview/Manager.ts:83`（ts-type）；`apps/desktop/src/preview/Manager.ts:1822`（comparison）；`apps/desktop/src/preview/Manager.ts:1866`（comparison）；`apps/server/src/preview/ServerBrowser.ts:1016`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:213`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:115`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:115`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:126`（comparison）；`packages/client-runtime/src/state/assets.ts:74`（ts-type）；`packages/contracts/src/ipc.ts:571`（ts-type）

### `T3 Code`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/TimelineAssistantRows.tsx:40`（A，AssistantTimelineRow）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:244`（B，WelcomeWizard）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:137`（A，UpdateEverythingDialogContent）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:157`（A，UpdateEverythingDialogContent）；`apps/web/src/components/ui/standalone-page.tsx:26`（B，StandalonePageHeader）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/cloud/cliAuthHtml.ts:12`（as-const）

### `seconds`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BackgroundActivitySettings.tsx:197`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:226`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:254`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:282`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1172`（A，EnvironmentProviderSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/peer/PeerLinks.ts:447`（object-key）

### `Actions`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/ProjectScriptsControl.tsx:373`（A，ProjectScriptsControl）；`apps/web/src/components/ProjectScriptsControl.tsx:414`（A，ProjectScriptsControl）；`apps/web/src/components/settings/ProjectActionsSettings.tsx:110`（B，ProjectActionsSettings）；`apps/web/src/components/settings/ProjectActionsSettings.tsx:115`（B，ProjectActionsSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:313`（object-key）

### `Command`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/projectScriptEditor.tsx:478`（A，ProjectScriptEditorForm）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:362`（A，ProcessDiagnosticsTable）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:591`（A，ProcessResourceHistoryTable）；`apps/web/src/components/settings/KeybindingsSettings.tsx:1132`（B，NewKeybindingCommandSelect）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/lib/embeddedScripts.ts:223`（switch-case）；`apps/web/src/shortcutModifierState.ts:77`（switch-case）

### `On`（B，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:308`（B，EffortRows）；`apps/web/src/components/chat/TraitsPicker.tsx:470`（A，TraitsMenuContent）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.tsx:31`（A，MobileClientStatusBadge）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:628`（A，ProjectOverrideInheritance）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:470`（never-attribute）

### `Project`（B，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:648`（B，PullRequestFiltersMenu）；`apps/web/src/components/settings/ProjectSettingsPanel.tsx:515`（B，ProjectDetail）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1488`（B，ScheduledTaskEditorForm）；`apps/web/src/components/settings/StorageSettings.tsx:226`（A，CleanupResults）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）

### `Ready`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceSetup.tsx:382`（A，PlatformStatus）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:1009`（A，AgentCard）；`apps/web/src/components/settings/CodexSetupSection.tsx:151`（A，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:843`（A，ManagedCodexSetup）
- 同一文本作为值用途字面量出现 11 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:312`（comparison）；`apps/desktop/src/app/DesktopStartupRecovery.ts:341`（comparison）；`apps/desktop/src/app/DesktopState.ts:12`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:257`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:397`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:443`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:618`（comparison）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:652`（comparison）；`apps/server/src/environment/staleWhileRevalidate.ts:14`（ts-type）；`apps/server/src/environment/staleWhileRevalidate.ts:40`（comparison）；…（共 11 处）

### `Settings`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsBreadcrumb.tsx:26`（A，SettingsBreadcrumb）；`apps/web/src/components/settings/SettingsBreadcrumb.tsx:31`（A，SettingsBreadcrumb）；`apps/web/src/components/sidebar/SidebarChrome.tsx:271`（B，SidebarUtilityMenu）；`apps/web/src/routes/_chat.settings.tsx:120`（B，SettingsContentLayout）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/managedPolicyFile.ts:111`（object-key）

### `T3 Connect`（B，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/clerk/T3ConnectUserProfilePage.tsx:253`（B，T3ConnectUserProfilePage）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:510`（A，ConnectAccountOption）；`apps/web/src/components/settings/LinkMachineSelect.tsx:23`（A，LinkMachineBadge）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:755`（B，CloudLinkRow）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/cli/up.ts:141`（as-const）

### `Available`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/cloud/CloudEnvironmentConnectList.tsx:411`（A，CloudEnvironmentConnectRows）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:726`（A，PlatformIcon）；`apps/web/src/components/settings/SourceControlSettings.tsx:205`（A，itemSummary）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:689`（as-const）

### `Branch`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/DiffPanel.tsx:1019`（A，DiffPanel）；`apps/web/src/components/GitActionsControl.tsx:1678`（A，GitActionsControl）；`apps/web/src/components/chat/WorktreeSetupCard.tsx:255`（A，SetupDetails）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/SubagentTooltipContent.tsx:172`（comparison）

### `Codex`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CodexSetupSection.tsx:121`（B，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:183`（B，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:801`（B，ManagedCodexSetup）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/provider/CodexProvider.ts:85`（as-const）

### `Connect`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CodexSetupSection.tsx:724`（A，ManagedCodexSetup）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:305`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:430`（A，ProviderAuthenticationSection）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/onboarding/WelcomeWizard.tsx:114`（as-const）；`packages/shared/src/managedPolicyFile.ts:113`（object-key）

### `Delete`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/projectScriptEditor.tsx:549`（A，ProjectScriptEditorForm）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:435`（A，AcpSessionManagementSection）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:831`（A，ScheduledTaskRow）
- 同一文本作为值用途字面量出现 10 次：`apps/desktop/src/preview/GuestInput.ts:37`（membership）；`apps/desktop/src/preview/RecordingInput.ts:31`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:60`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:60`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:713`（comparison）；`apps/web/src/components/projectScriptEditor.tsx:307`（comparison）；`apps/web/src/composer-rich-text-doc.ts:431`（object-key）；`apps/web/src/terminal/ghostty/keyCodes.ts:75`（as-const）；`packages/client-runtime/src/device/stream.ts:341`（object-key）；`packages/client-runtime/src/device/stream.ts:388`（object-key）

### `Devices`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:814`（B，DeviceIntegrationSettings）；`apps/web/src/components/settings/LabsSettingsPanel.tsx:188`（A，SimlockHostsRow）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:394`（B，ProviderSettingsPanelContent）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/device/DevicePanel.tsx:254`（never-attribute）

### `Host`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:626`（B，PullRequestFiltersMenu）；`apps/web/src/components/settings/AddEnvironmentDialog.tsx:396`（A，renderRemoteFields）；`apps/web/src/components/settings/SourceControlTokenSettings.tsx:114`（A，SourceControlTokenSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerSurface.tsx:85`（object-key）

### `Process`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:585`（A，ProcessResourceHistoryTable）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:575`（A，ProcessTable）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:679`（A，HistoryProcessTable）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/preview/RecordingInput.ts:20`（membership）；`apps/web/src/browser/ServerBrowserSurface.tsx:678`（comparison）；`apps/web/src/terminal/ghostty/surface.ts:385`（comparison）

### `Settled`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3551`（B，Sidebar）；`apps/web/src/components/Sidebar.tsx:3567`（B，Sidebar）；`apps/web/src/components/chat/useThreadLifecycle.tsx:624`（B，useThreadLifecycle）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/hooks/showThreadUndoNotice.ts:16`（ts-type）

### `value`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CustomModelEditor.tsx:141`（B，renderChoice）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:529`（B，ProviderEnvironmentSection）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:552`（B，ProviderEnvironmentSection）
- 同一文本作为值用途字面量出现 1072 次：`apps/desktop/src/app/DesktopObservability.ts:110`（object-key）；`apps/desktop/src/app/DesktopObservability.ts:246`（object-key）；`apps/desktop/src/app/DesktopObservability.ts:252`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:254`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:276`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:278`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:335`（object-key）；`apps/desktop/src/preview/BrowserImport/BrowserImport.ts:161`（object-key）；`apps/desktop/src/preview/BrowserImport/ChromiumCookies.ts:57`（object-key）；`apps/desktop/src/preview/BrowserImport/ChromiumCookies.ts:73`（object-key）；…（共 1072 处）

### `Active`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3489`（B，Sidebar）；`apps/web/src/components/Sidebar.tsx:3500`（B，Sidebar）
- 同一文本作为值用途字面量出现 7 次：`apps/desktop/src/backend/DesktopBackendPool.ts:82`（ts-type）；`apps/desktop/src/backend/DesktopBackendPool.ts:207`（comparison）；`apps/desktop/src/backend/DesktopBackendPool.ts:305`（comparison）；`apps/desktop/src/backend/DesktopBackendPool.ts:312`（comparison）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1131`（never-attribute）；`packages/client-runtime/src/relay/cloudAccountService.ts:83`（ts-type）；`packages/client-runtime/src/relay/cloudAccountService.ts:170`（comparison）

### `Allowed`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/permissions/PermissionChecklist.tsx:33`（A，PermissionChecklist）；`apps/web/src/components/settings/SessionPermissions.tsx:30`（A，SessionPermissions）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/policy/managedProviders.ts:103`（ts-type）；`apps/server/src/policy/managedSettings.ts:150`（ts-type）

### `Android`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/RightPanelTabs.tsx:1572`（A，DeviceTabTooltip）；`apps/web/src/components/device/DeviceHostAvailability.tsx:16`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/ws.ts:743`（comparison）；`packages/contracts/src/baseSchemas.ts:287`（schema-literal）

### `App`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceToolsPanel.tsx:129`（B，DeviceToolsPanel）；`apps/web/src/components/settings/SettingsPanels.tsx:2011`（B，AboutSettingsPanel）
- 同一文本作为值用途字面量出现 6 次：`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:29`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:47`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:60`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:79`（object-key）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:39`（ts-type）；`apps/desktop/src/snapShot/SnapShotAccessibilityWorker.ts:9`（object-key）

### `Backspace`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteContent.tsx:85`（A，CommandPaletteContent）；`apps/web/src/components/projectScriptEditor.tsx:473`（A，ProjectScriptEditorForm）
- 同一文本作为值用途字面量出现 13 次：`apps/desktop/src/preview/GuestInput.ts:33`（membership）；`apps/desktop/src/preview/RecordingInput.ts:30`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:59`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:59`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:713`（comparison）；`apps/web/src/components/CommandPalette.tsx:2529`（comparison）；`apps/web/src/components/chat/ComposerStashMenu.tsx:106`（comparison）；`apps/web/src/components/projectScriptEditor.tsx:307`（comparison）；`apps/web/src/composer-rich-text-doc.ts:368`（object-key）；`apps/web/src/composer-rich-text-doc.ts:430`（object-key）；…（共 13 处）

### `Copy`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/GuestShareControls.tsx:130`（A，GuestShareDialog）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1080`（A，WebhookEndpointField）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/terminal/ghostty/keyCodes.ts:180`（as-const）

### `Custom`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/StorageSettings.tsx:553`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:559`（A，WorktreeCleanupSection）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:916`（comparison）

### `Disabled`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomeWizard.tsx:1014`（A，AgentCard）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:529`（A，AcpSessionManagementSection）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1124`（never-attribute）

### `Failed`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:211`（A，ThreadLineageWorkflowRow）；`apps/web/src/components/settings/DeviceHostEditor.tsx:250`（A，DeviceHostEditorForm）
- 同一文本作为值用途字面量出现 22 次：`apps/desktop/src/backend/DesktopBackendConfiguration.ts:266`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:307`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:319`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:333`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:349`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:384`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:423`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:675`（comparison）；`apps/web/src/components/Sidebar.logic.ts:670`（ts-type）；`apps/web/src/components/chat/threadActivityAnnouncement.ts:11`（as-const）；…（共 22 处）

### `Files`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1700`（A，GitActionsControl）；`apps/web/src/components/diffs/DiffFileTree.tsx:189`（A，DiffFileTree）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/chat/workspaceFileDrop.ts:26`（membership）；`apps/web/src/components/guest/GuestPage.tsx:738`（membership）

### `Local ACP command`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AcpRegistrySearchStep.tsx:196`（A，AcpRegistrySearchStep）；`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:530`（A，AddProviderInstanceDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:256`（as-const）

### `Nightly`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:381`（A，AboutVersionSection）；`apps/web/src/components/settings/SettingsPanels.tsx:409`（A，AboutVersionSection）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/SidebarStageBackdrop.tsx:10`（ts-type）；`packages/contracts/src/ipc.ts:81`（ts-type）；`packages/contracts/src/ipc.ts:96`（schema-literal）

### `Provider`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:603`（A，PublishRepositoryDialog）；`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:485`（A，AddProviderInstanceDialog）
- 同一文本作为值用途字面量出现 4 次：`apps/web/src/components/GitActionsControl.tsx:510`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:8`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:9`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:10`（as-const）

### `Read`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:276`（B，AggregateCard）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:684`（A，HistoryProcessTable）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/electron/LinuxColorScheme.ts:21`（ts-type）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:490`（as-const）

### `Refresh provider status`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1028`（A，EnvironmentProviderSettings）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1039`（A，EnvironmentProviderSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ProviderStatusBanner.tsx:109`（non-display-call）

### `Repository`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteAddProject.tsx:159`（A，RemoteRepositorySummary）；`apps/web/src/components/GitActionsControl.tsx:680`（A，PublishRepositoryDialog）
- 同一文本作为值用途字面量出现 5 次：`apps/server/src/project/AgentSessionScanner.ts:847`（ts-type）；`apps/server/src/project/AgentSessionScanner.ts:1539`（comparison）；`apps/web/src/components/GitActionsControl.tsx:510`（as-const）；`packages/source-control-github/src/server/GitHubPullRequestApi.ts:2411`（comparison）；`packages/source-control-github/src/server/pullRequestReads.graphql.ts:1683`（schema-literal）

### `Running`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:206`（A，backgroundWorkNowItem）；`apps/web/src/components/device/DeviceToolVersions.tsx:63`（A，DeviceToolVersions）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/pullRequest/PullRequestReviewGuideService.ts:488`（comparison）；`apps/web/src/components/pullRequest/guide/PullRequestGuideRunCoordinator.tsx:71`（comparison）；`apps/web/src/components/pullRequest/guide/useReviewGuideWriter.ts:34`（comparison）；`apps/web/src/state/pullRequests.ts:410`（comparison）

### `Skipped`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BrowserImportWizard.tsx:541`（A，DoneStep）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:172`（A，UpdateEverythingDialogContent）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/project/AgentSessionImporter.ts:241`（comparison）；`apps/server/src/project/AgentSessionScanner.ts:186`（ts-type）

### `Snoozed`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3534`（B，Sidebar）；`apps/web/src/components/chat/useThreadLifecycle.tsx:615`（B，useThreadLifecycle）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/hooks/showThreadUndoNotice.ts:16`（ts-type）

### `Stop`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:242`（A，backgroundWorkNowItem）；`apps/web/src/components/preview/PreviewChromeRow.tsx:140`（B，PreviewChromeRow）
- 同一文本作为值用途字面量出现 2 次：`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51675`（object-key）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51699`（object-key）

### `Update`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SavedEnvironmentRows.tsx:370`（B，SavedBackendListRow）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:381`（B，SavedBackendListRow）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:32`（ts-type）；`apps/desktop/src/app/DesktopStartupRecovery.ts:85`（switch-case）；`apps/desktop/src/app/DesktopStartupRecovery.ts:214`（comparison）

### `Version`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AboutVersionTitle.tsx:28`（A，AboutVersionTitle）；`apps/web/src/components/settings/ConnectionsSettings.tsx:1088`（B，ConnectionsSettings）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/snapShot/LinuxSnapShot.ts:55`（object-key）；`apps/desktop/src/snapShot/LinuxSnapShot.ts:56`（object-key）；`apps/desktop/src/snapShot/NiriSnapShot.ts:45`（object-key）

### `Working`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPalette.tsx:2725`（B，OpenCommandPaletteDialog）；`apps/web/src/components/Sidebar.tsx:3519`（B，Sidebar）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/Sidebar.logic.ts:667`（ts-type）

### `You`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/TimelineUserMessageRow.tsx:852`（A，UserTimelineRow）；`apps/web/src/components/chat/TimelineUserMessageRow.tsx:875`（A，UserTimelineRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/guest/GuestPage.tsx:601`（never-attribute）

### `available`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceHostAvailability.tsx:17`（A，DeviceHostAvailability）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:675`（A，PlatformIcon）
- 同一文本作为值用途字面量出现 126 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:55`（comparison）；`apps/desktop/src/ipc/methods/wsl.ts:31`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:735`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:740`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:742`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1051`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1055`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1061`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1067`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1081`（object-key）；…（共 126 处）

### `comment`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:233`（A，ReviewThreadCard）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:333`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 125 次：`apps/desktop/src/preview/PickPreload.ts:1417`（object-key）；`apps/desktop/src/preview/PickedElementPayload.ts:64`（computed-key）；`apps/server/src/pullRequest/PullRequestService.ts:255`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:291`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:599`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2135`（ts-type）；`apps/server/src/pullRequest/PullRequestService.ts:2139`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:2149`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:2159`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:3746`（object-key）；…（共 125 处）

### `comments`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:233`（A，ReviewThreadCard）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:333`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 88 次：`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:258`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:340`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:369`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1862`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2302`（object-key）；`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:216`（object-key）；`apps/web/src/components/files/officeArchive.ts:493`（membership）；`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1085`（object-key）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:169`（object-key）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:207`（object-key）；…（共 88 处）

### `default`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentIconPicker.tsx:82`（A，EnvironmentIconMenu）；`apps/web/src/components/settings/FontFamilyPicker.tsx:155`（A，renderItem）
- 同一文本作为值用途字面量出现 539 次：`apps/desktop/src/ipc/methods/window.ts:175`（comparison）；`apps/desktop/src/snapShot/RegionSnapShotWorker.ts:8`（object-key）；`apps/server/src/device/DeviceActions.ts:88`（object-key）；`apps/server/src/device/DeviceActions.ts:94`（object-key）；`apps/server/src/mcp/McpInvocationContext.ts:71`（object-key）；`apps/server/src/mcp/OrchestratorMcpService.ts:345`（object-key）；`apps/server/src/mcp/threadAccess.ts:154`（comparison）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:3605`（comparison）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:10447`（as-const）；`apps/server/src/orchestration-v2/DispatchModeLimit.ts:31`（object-key）；…（共 539 处）

### `file`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:304`（A，ThreadDetailsPrRow）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1131`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 255 次：`apps/desktop/src/permissions/MacPermissionHelper.ts:139`（object-key）；`apps/server/src/assets/AssetAccess.ts:189`（ts-type）；`apps/server/src/assets/AssetAccess.ts:194`（object-key）；`apps/server/src/assets/AssetAccess.ts:1016`（object-key）；`apps/server/src/assets/AttachmentUpload.ts:50`（schema-literal）；`apps/server/src/assets/AttachmentUpload.ts:103`（comparison）；`apps/server/src/assets/AttachmentUpload.ts:107`（comparison）；`apps/server/src/assets/AttachmentUpload.ts:173`（comparison）；`apps/server/src/attachmentStore.ts:159`（switch-case）；`apps/server/src/cli/policy.ts:92`（object-key）；…（共 255 处）

### `files`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:304`（A，ThreadDetailsPrRow）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1131`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 266 次：`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:101`（object-key）；`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:220`（object-key）；`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:235`（object-key）；`apps/server/src/git/GitManager.ts:1112`（object-key）；`apps/server/src/git/GitWorkflowService.ts:145`（object-key）；`apps/server/src/orchestration-v2/CheckpointCaptureService.ts:280`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:212`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:212`（ts-type）；`apps/server/src/orchestration-v2/CheckpointService.ts:226`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:333`（object-key）；…（共 266 处）

### `ghost`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:100`（A，ActorName）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:418`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 11 次：`apps/web/src/components/chat/MessageCopyButton.tsx:28`（ts-type）；`apps/web/src/components/chat/MessageCopyButton.tsx:50`（comparison）；`apps/web/src/components/ui/button.tsx:48`（object-key）；`apps/web/src/components/ui/input-group.tsx:24`（object-key）；`apps/web/src/components/ui/menu.tsx:127`（ts-type）；`apps/web/src/components/ui/menu.tsx:133`（comparison）；`apps/web/src/components/ui/menu.tsx:135`（non-display-call）；`apps/web/src/components/ui/select.tsx:23`（object-key）；`apps/web/src/components/ui/toast.tsx:47`（ts-type）；`apps/web/src/components/ui/toast.tsx:59`（ts-type）；…（共 11 处）

### `iOS`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/RightPanelTabs.tsx:1572`（A，DeviceTabTooltip）；`apps/web/src/components/device/DeviceHostAvailability.tsx:16`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/ws.ts:743`（comparison）；`packages/contracts/src/baseSchemas.ts:286`（schema-literal）

### `on`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1873`（A，ScheduledTaskEditorForm）；`apps/web/src/components/settings/SettingsScopeSentence.tsx:85`（A，SettingsScopeSentence）
- 同一文本作为值用途字面量出现 30 次：`apps/desktop/src/app/DesktopLifecycle.ts:74`（object-key）；`apps/desktop/src/electron/ElectronApp.ts:76`（object-key）；`apps/desktop/src/electron/ElectronApp.ts:250`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:76`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:168`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:170`（object-key）；`apps/desktop/src/ipc/DesktopIpc.ts:26`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:132`（ts-type）；`apps/desktop/src/snapShot/snapShot.ts:232`（comparison）；`apps/desktop/src/updates/updatesTestHarness.ts:108`（object-key）；…（共 30 处）

### `opened`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestLinkPreview.tsx:142`（A，PullRequestLinkPreview）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:251`（B，WebhookFiltersField）
- 同一文本作为值用途字面量出现 21 次：`apps/server/src/preview/ServerBrowser.ts:2282`（comparison）；`apps/web/src/components/CommandPaletteThreadItems.tsx:181`（object-key）；`apps/web/src/components/device/DeviceAndroidFoldControls.tsx:98`（comparison）；`apps/web/src/components/device/DeviceAndroidFoldControls.tsx:100`（comparison）；`apps/web/src/components/device/deviceFold.ts:4`（ts-type）；`apps/web/src/components/device/deviceFold.ts:8`（ts-type）；`apps/web/src/components/device/deviceFold.ts:34`（comparison）；`apps/web/src/components/files/office/spreadsheet.worker.ts:32`（object-key）；`apps/web/src/components/files/office/spreadsheet.worker.ts:34`（object-key）；`apps/web/src/components/promptLinks/NewThreadLinkView.tsx:51`（ts-type）；…（共 21 处）

### `replies`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:242`（A，CollapsedComment）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:422`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 8 次：`apps/server/src/guest/GuestShareService.ts:496`（object-key）；`apps/server/src/guest/GuestShareService.ts:501`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:218`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:229`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:483`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:550`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:584`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:709`（object-key）

### `reply`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:242`（A，CollapsedComment）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:422`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 18 次：`apps/server/src/cli/thread.ts:495`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:244`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:351`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:401`（object-key）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:556`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:556`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:556`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:622`（object-key）；`packages/contracts/src/pullRequest.ts:238`（object-key）；`packages/provider-opencode/src/server/adapter.ts:3548`（object-key）；…（共 18 处）

### `updated`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1526`（A，PullRequestDetailPanel）；`apps/web/src/components/pullRequest/PullRequestGhosts.tsx:217`（A，PullRequestDetailGhost）
- 同一文本作为值用途字面量出现 32 次：`apps/server/src/cli/update.ts:574`（error-constructor）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:40`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:86`（object-key）；`apps/web/src/components/ProviderUpdateLaunchNotification.logic.ts:203`（ts-type）；`apps/web/src/components/ServerUpdateAction.tsx:107`（ts-type）；`apps/web/src/components/chat/V2LifecycleRow.tsx:332`（object-key）；`apps/web/src/components/chat/V2LifecycleRow.tsx:340`（object-key）；`apps/web/src/components/pullRequest/PullRequestDetailLayout.tsx:12`（object-key）；`apps/web/src/components/pullRequest/PullRequestDetailLayout.tsx:21`（object-key）；`apps/web/src/components/pullRequest/pullRequestList.logic.ts:764`（comparison）；…（共 32 处）

### `Add ChatGPT account`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AddCodexAccountDialog.tsx:96`（B，AddCodexAccountDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddCodexAccountDialog.tsx:42`（non-display-call）

### `Alt`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:101`（A，KeybindingPill）
- 同一文本作为值用途字面量出现 8 次：`apps/desktop/src/preview/GuestInput.ts:45`（membership）；`apps/desktop/src/preview/RecordingInput.ts:23`（comparison）；`apps/desktop/src/preview/RecordingInput.ts:40`（membership）；`apps/web/src/components/AppSidebarLayout.tsx:223`（membership）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1784`（comparison）；`apps/web/src/components/settings/useSnapShotShortcutRecorder.tsx:23`（object-key）；`apps/web/src/shortcutModifierState.ts:81`（switch-case）；`packages/contracts/src/previewAutomation.ts:394`（schema-literal）

### `Any`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:454`（A，PullRequestLabelFilter）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/project/AgentSessionJson.ts:32`（switch-case）

### `Attachment`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/AttachmentFilePreview.tsx:385`（A，AttachmentFilePreview）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:305`（object-key）

### `Beta`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/LabsSettingsPanel.tsx:21`（B，LabsSettingsPanel）
- 同一文本作为值用途字面量出现 2 次：`packages/contracts/src/ipc.ts:81`（ts-type）；`packages/contracts/src/ipc.ts:96`（schema-literal）

### `Body`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:945`（B，WebhookDeliveriesDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:317`（object-key）

### `Checking`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:656`（A，DiagnosticsLastChecked）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:31`（ts-type）；`apps/desktop/src/app/DesktopStartupRecovery.ts:83`（switch-case）

### `Coalesce key`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1724`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:132`（as-const）

### `Commit`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1829`（A，GitActionsControl）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/GitActionsControl.tsx:310`（comparison）；`packages/source-control-github/src/server/gitHubPullRequestJson.ts:1137`（comparison）；`packages/source-control-github/src/server/pullRequestReads.graphql.ts:840`（schema-literal）

### `Connected`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DeviceHostEditor.tsx:254`（A，DeviceHostEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:687`（as-const）

### `Count`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:765`（A，AttributionTable）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:316`（object-key）

### `Cursor`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/usage/UsagePage.tsx:1183`（A，CursorEnableLimits）
- 同一文本作为值用途字面量出现 2 次：`packages/provider-cursor/src/server/auth.ts:163`（object-key）；`packages/provider-cursor/src/server/status.ts:27`（as-const）

### `Desktop`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1077`（B，ResourceTelemetryDiagnosticsBody）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/previewViewport.ts:11`（ts-type）

### `Device hub`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:973`（B，DeviceIntegrationControls）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/device/DeviceToolVersions.tsx:54`（as-const）；`packages/client-runtime/src/state/device.ts:100`（as-const）

### `Enabled`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1918`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1123`（never-attribute）

### `Encoding`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1804`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/persistence/Errors.ts:8`（switch-case）；`packages/effect-acp/src/errors.ts:22`（schema-literal）；`packages/effect-acp/src/errors.ts:81`（switch-case）；`packages/effect-acp/src/errors.ts:116`（switch-case）；`packages/effect-codex-app-server/src/errors.ts:14`（schema-literal）；`packages/effect-codex-app-server/src/errors.ts:44`（switch-case）

### `Enter`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteContent.tsx:79`（A，CommandPaletteContent）
- 同一文本作为值用途字面量出现 64 次：`apps/desktop/src/preview/AnnotationKeyboard.ts:15`（comparison）；`apps/desktop/src/preview/GuestInput.ts:35`（membership）；`apps/desktop/src/preview/RecordingInput.ts:28`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:697`（comparison）；`apps/web/src/components/BranchPicker.tsx:162`（comparison）；`apps/web/src/components/CommandPalette.tsx:2424`（comparison）；`apps/web/src/components/CommandPalette.tsx:2493`（comparison）；`apps/web/src/components/CommandPalette.tsx:2501`（comparison）；`apps/web/src/components/CommandPalette.tsx:2516`（comparison）；`apps/web/src/components/CommandPalette.tsx:2579`（comparison）；…（共 64 处）

### `Environment disconnected`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:682`（B，ScheduledTaskEnvironmentSection）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/IntegrationsSettings.tsx:863`（error-constructor）；`apps/web/src/components/settings/deviceHostConnectionChecks.ts:48`（error-constructor）

### `Fast`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:589`（B，SpeedControl）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:129`（comparison）；`apps/web/src/components/chat/ComposerModelEffort.tsx:545`（comparison）；`apps/web/src/components/chat/TraitsSpeed.tsx:22`（comparison）；`apps/web/src/components/settings/ProviderModelsSection.tsx:51`（comparison）；`packages/client-runtime/src/modelTraits.ts:140`（comparison）

### `Filter`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:863`（A，PullRequestSummaryTab）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/persistence/Errors.ts:7`（switch-case）；`packages/effect-acp/src/errors.ts:21`（schema-literal）；`packages/effect-acp/src/errors.ts:80`（switch-case）；`packages/effect-acp/src/errors.ts:115`（switch-case）；`packages/effect-codex-app-server/src/errors.ts:13`（schema-literal）；`packages/effect-codex-app-server/src/errors.ts:43`（switch-case）

### `Foreground`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceToolsPanel.tsx:130`（B，DeviceToolsPanel）
- 同一文本作为值用途字面量出现 1 次：`packages/tailscale/src/tailscale.ts:521`（object-key）

### `Home`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceControlsRail.tsx:66`（B，DeviceControlsRail）
- 同一文本作为值用途字面量出现 21 次：`apps/desktop/src/preview/GuestInput.ts:39`（membership）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1125`（comparison）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1144`（comparison）；`apps/web/src/components/chat/TimelineMinimap.tsx:181`（comparison）；`apps/web/src/components/chat/timelineViewport.ts:63`（membership）；`apps/web/src/components/chat/useAssistantCitationTarget.ts:10`（membership）；`apps/web/src/components/files/FileExplorerPane.tsx:96`（switch-case）；`apps/web/src/components/files/VirtualTablePreview.tsx:454`（comparison）；`apps/web/src/components/files/VirtualTablePreview.tsx:458`（comparison）；`apps/web/src/components/files/office/Spreadsheet.tsx:122`（comparison）；…（共 21 处）

### `Icon`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentIconPicker.tsx:55`（A，EnvironmentIconMenu）
- 同一文本作为值用途字面量出现 118 次：`apps/web/src/components/ChatMarkdown.tsx:349`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:353`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:359`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:365`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:371`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:377`（object-key）；`apps/web/src/components/GitActionsControl.tsx:177`（object-key）；`apps/web/src/components/GitActionsControl.tsx:285`（ts-type）；`apps/web/src/components/GitActionsControl.tsx:299`（ts-type）；`apps/web/src/components/GitActionsControl.tsx:728`（object-key）；…（共 118 处）

### `Idle`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1128`（B，ResourceTelemetryDiagnosticsBody）
- 同一文本作为值用途字面量出现 24 次：`apps/desktop/src/preview/Manager.ts:82`（ts-type）；`apps/desktop/src/preview/Manager.ts:1219`（comparison）；`apps/desktop/src/preview/Manager.ts:1921`（comparison）；`apps/web/src/browser/ElectronBrowserHost.tsx:138`（comparison）；`apps/web/src/components/RightPanelTabs.tsx:599`（comparison）；`apps/web/src/components/RightPanelTabs.tsx:636`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:211`（as-const）；`apps/web/src/components/preview/PreviewView.tsx:212`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:216`（comparison）；`apps/web/src/components/preview/openPreviewSession.ts:59`（comparison）；…（共 24 处）

### `Interrupt`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerPrimaryActions.tsx:150`（A，renderStopGenerationButton）
- 同一文本作为值用途字面量出现 4 次：`packages/effect-acp/src/protocol.ts:298`（comparison）；`packages/effect-acp/src/protocol.ts:708`（switch-case）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51667`（object-key）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51683`（object-key）

### `J`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/guide/GuideStop.tsx:123`（A，GuideStop）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/terminalOutput.ts:434`（switch-case）

### `K`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/guide/GuideStop.tsx:124`（A，GuideStop）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/terminalOutput.ts:431`（switch-case）

### `Mode`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/CompactComposerControlsMenu.tsx:56`（A，CompactComposerControlsMenu）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/qrCode.ts:574`（object-key）

### `New thread`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/sidebar/SidebarThreadHeader.tsx:109`（B，SidebarThreadHeader）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/orchestration-v2/ThreadTitleRegenerationService.ts:180`（comparison）

### `Not available`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:726`（A，PlatformIcon）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:690`（as-const）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:700`（comparison）

### `Organization`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:2014`（B，AboutSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/policy/policyTemplates.ts:199`（comparison）；`packages/shared/src/managedPolicyFile.ts:109`（object-key）；`packages/source-control-github/src/server/pullRequestReviews.graphql.ts:24`（schema-literal）

### `Path`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/WorktreeSetupCard.tsx:271`（A，SetupDetails）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/cli/update.ts:228`（computed-key）；`apps/server/src/cloud/pinnedRuntime.ts:465`（computed-key）；`apps/server/src/process/externalLauncher.ts:111`（object-key）；`packages/provider-core/src/server/maintenanceResolver.ts:57`（object-key）

### `Prompt`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1573`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/provider/acp/AntigravityChildWork.ts:49`（object-key）

### `Remove route`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentRoutesList.tsx:204`（A，SortableRouteRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/EnvironmentRoutesList.tsx:63`（non-display-call）

### `Skill`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerCommandMenu.tsx:292`（A，SkillSourceBadge）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/toolActivity.ts:21`（comparison）

### `Span`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:1244`（A，DiagnosticsSettingsBody）
- 同一文本作为值用途字面量出现 3 次：`packages/shared/src/nodeSqliteClient.ts:68`（comparison）；`packages/shared/src/nodeSqliteClient.ts:72`（comparison）；`packages/shared/src/nodeSqliteClient.ts:84`（comparison）

### `This connection cannot read host files.`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/FilePreviewPanel.tsx:1242`（A，FilePreviewPanel）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/media/MediaActions.tsx:72`（error-constructor）

### `Type`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:364`（A，ProcessDiagnosticsTable）
- 同一文本作为值用途字面量出现 27 次：`apps/server/src/cli/thread.ts:185`（ts-type）；`apps/server/src/peer/PeerMcpClient.ts:45`（ts-type）；`apps/server/src/textGeneration/ClaudeTextGeneration.ts:135`（ts-type）；`apps/server/src/textGeneration/CodexTextGeneration.ts:222`（ts-type）；`apps/web/src/components/settings/SecretProviderDialog.logic.ts:67`（ts-type）；`packages/contracts/src/baseSchemas.ts:125`（ts-type）；`packages/contracts/src/baseSchemas.ts:126`（ts-type）；`packages/contracts/src/baseSchemas.ts:134`（ts-type）；`packages/contracts/src/baseSchemas.ts:182`（ts-type）；`packages/contracts/src/baseSchemas.ts:215`（ts-type）；…（共 27 处）

### `Unknown`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceToolsPanel.tsx:389`（A，ChoiceSelect）
- 同一文本作为值用途字面量出现 7 次：`apps/server/src/assets/AttachmentUpload.ts:225`（error-constructor）；`apps/server/src/project/AgentSessionJson.ts:31`（switch-case）；`apps/server/src/provider/AntigravityInstallation.ts:367`（comparison）；`apps/server/src/provider/Drivers/CodexHomeLayout.ts:155`（comparison）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1057`（never-attribute）；`packages/contracts/src/resourceTelemetry.ts:239`（schema-literal）；`packages/shared/src/symlink.ts:43`（error-constructor）

### `Waiting`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:206`（A，backgroundWorkNowItem）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/Sidebar.logic.ts:674`（ts-type）

### `Worktree`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/PullRequestThreadDialog.tsx:307`（A，PullRequestThreadDialog）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/project/AgentSessionScanner.ts:848`（ts-type）；`apps/server/src/project/AgentSessionScanner.ts:1535`（comparison）

### `agent`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:215`（A，ThreadLineageWorkflowRow）
- 同一文本作为值用途字面量出现 190 次：`apps/desktop/src/preview/Manager.ts:104`（ts-type）；`apps/desktop/src/preview/PickPreload.ts:65`（comparison）；`apps/desktop/src/preview/PickPreload.ts:85`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:39`（ts-type）；`apps/desktop/src/preview/RecordingCursor.ts:54`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:123`（comparison）；`apps/server/src/cli/triage.ts:35`（object-key）；`apps/server/src/cli/triage.ts:105`（schema-literal）；`apps/server/src/cli/triage.ts:117`（object-key）；`apps/server/src/cli/triage.ts:154`（object-key）；…（共 190 处）

### `agents`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:215`（A，ThreadLineageWorkflowRow）
- 同一文本作为值用途字面量出现 24 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:5997`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:6398`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:100`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:115`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:176`（object-key）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:110`（ts-type）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:171`（comparison）；`apps/web/src/components/onboarding/WelcomeWizard.tsx:285`（comparison）；`apps/web/src/rightPanelStore.ts:492`（comparison）；`apps/web/src/rightPanelStore.ts:582`（comparison）；…（共 24 处）

### `and`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:505`（A，WhenExpressionNodeEditor）
- 同一文本作为值用途字面量出现 14 次：`apps/server/src/keybindings.ts:164`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:98`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:326`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.tsx:146`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:482`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:505`（never-attribute）；`apps/web/src/keybindings.ts:82`（switch-case）；`packages/client-runtime/src/work-log/commandLabel.ts:73`（membership）；`packages/client-runtime/src/work-log/commandLabel.ts:161`（membership）；`packages/contracts/src/keybindings.ts:183`（schema-literal）；…（共 14 处）

### `approval`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1664`（A，PullRequestDetailPanel）
- 同一文本作为值用途字面量出现 45 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:4324`（ts-type）；`apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts:1314`（ts-type）；`apps/web/src/components/RightPanelTabs.tsx:701`（comparison）；`apps/web/src/components/Sidebar.logic.ts:841`（ts-type）；`apps/web/src/components/Sidebar.logic.ts:866`（comparison）；`apps/web/src/components/Sidebar.logic.ts:883`（comparison）；`apps/web/src/components/Sidebar.logic.ts:921`（membership）；`apps/web/src/components/Sidebar.logic.ts:988`（ts-type）；`apps/web/src/components/Sidebar.logic.ts:1114`（comparison）；`apps/web/src/components/ThreadNotificationCoordinator.tsx:134`（comparison）；…（共 45 处）

### `approvals`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1664`（A，PullRequestDetailPanel）
- 同一文本作为值用途字面量出现 13 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:426`（object-key）；`apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts:281`（object-key）；`apps/web/src/components/chat/usePendingThreadRequests.ts:62`（object-key）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.logic.ts:9`（as-const）；`packages/client-runtime/src/state/threadRequests.ts:92`（object-key）；`packages/client-runtime/src/state/threadRequests.ts:284`（object-key）；`packages/contracts/src/orchestrationV2.ts:387`（object-key）；`packages/provider-acp/src/server/adapter.ts:670`（object-key）；`packages/provider-cursor/src/server/adapter.ts:119`（object-key）；`packages/provider-muse/src/server/adapter.ts:142`（object-key）；…（共 13 处）

### `as`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SourceControlSettings.tsx:171`（A，itemSummary）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/chat/MarkdownCodeBlock.tsx:45`（object-key）；`apps/web/src/components/chat/MarkdownCodeBlock.tsx:55`（object-key）

### `at`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SnoozePresetsSettings.tsx:377`（A，SnoozePresetFields）
- 同一文本作为值用途字面量出现 84 次：`apps/server/src/device/SimlockDeviceHost.ts:196`（object-key）；`apps/server/src/device/SimlockDeviceHost.ts:321`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:82`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:544`（object-key）；`apps/server/src/orchestration-v2/assistantStreaming.ts:72`（object-key）；`apps/server/src/orchestration-v2/assistantStreaming.ts:101`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1112`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1133`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2698`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2707`（object-key）；…（共 84 处）

### `author`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:336`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 126 次：`apps/server/src/orchestration-v2/PullRequestSyncReactor.ts:210`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:38`（ts-type）；`apps/server/src/pullRequest/PullRequestService.ts:1237`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1684`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1770`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1821`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1860`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2883`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:3150`（object-key）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:991`（object-key）；…（共 126 处）

### `authors`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:336`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 22 次：`apps/server/src/pullRequest/PullRequestService.ts:2532`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2542`（object-key）；`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:269`（object-key）；`apps/web/src/components/pullRequest/pullRequestList.logic.ts:112`（object-key）；`apps/web/src/state/pullRequests.ts:649`（object-key）；`packages/contracts/src/acpRegistry.ts:67`（object-key）；`packages/contracts/src/pullRequest.ts:227`（object-key）；`packages/contracts/src/pullRequest.ts:518`（schema-literal）；`packages/contracts/src/pullRequest.ts:533`（object-key）；`packages/provider-acp-registry/src/server/AcpRegistrySupport.ts:147`（object-key）；…（共 22 处）

### `auto-settle`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:1674`（B，ThreadsSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/settings/SettingsPanels.tsx:1634`（never-attribute）；`apps/web/src/components/threadActionMenu.logic.ts:14`（ts-type）；`apps/web/src/components/threadActionMenu.logic.ts:208`（as-const）

### `base64`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1819`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 16 次：`apps/desktop/src/preview/FaviconCapture.ts:219`（comparison）；`apps/desktop/src/preview/FaviconCapture.ts:220`（membership）；`apps/desktop/src/preview/FaviconCapture.ts:227`（comparison）；`apps/server/src/htmlRender/HtmlRender.ts:299`（as-const）；`apps/server/src/imageMime.ts:51`（object-key）；`apps/server/src/imageMime.ts:71`（comparison）；`apps/server/src/imageMime.ts:107`（object-key）；`apps/server/src/orchestration-v2/toolOutputImageBytes.ts:9`（membership）；`apps/server/src/orchestration-v2/toolOutputImageBytes.ts:28`（comparison）；`apps/web/src/components/media/mediaContent.ts:32`（comparison）；…（共 16 处）

### `chain`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/ThreadStatusIndicators.tsx:355`（A，ThreadPullRequestsMiniList）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/ComposerPromptEditorTiptap.tsx:571`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:593`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:631`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:645`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:672`（object-key）

### `cost`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/usage/UsagePage.tsx:815`（A，UsageOverview）
- 同一文本作为值用途字面量出现 29 次：`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:38`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:315`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:335`（object-key）；`apps/web/src/components/files/office/document.worker.ts:189`（object-key）；`apps/web/src/components/usage/UsagePage.tsx:627`（ts-type）；`apps/web/src/components/usage/UsagePage.tsx:704`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:711`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:713`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:752`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:792`（comparison）；…（共 29 处）

### `custom`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProviderModelsSection.tsx:533`（A，ProviderModelRow）
- 同一文本作为值用途字面量出现 85 次：`apps/server/src/git/GitManager.ts:814`（switch-case）；`apps/server/src/orchestration-v2/ThreadLaunchService.ts:368`（comparison）；`apps/web/src/components/settings/BranchNamingSettings.tsx:19`（object-key）；`apps/web/src/components/settings/BranchNamingSettings.tsx:117`（comparison）；`apps/web/src/components/settings/IntegrationsSettings.tsx:697`（object-key）；`apps/web/src/components/settings/IntegrationsSettings.tsx:746`（comparison）；`apps/web/src/components/settings/SettingInheritance.tsx:37`（object-key）；`apps/web/src/components/settings/SettingInheritance.tsx:44`（object-key）；`apps/web/src/components/settings/SettingsPanels.logic.ts:190`（comparison）；`apps/web/src/components/settings/SettingsPanels.logic.ts:202`（comparison）；…（共 85 处）

### `days`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/StorageSettings.tsx:158`（A，RetentionControl）
- 同一文本作为值用途字面量出现 32 次：`apps/server/src/auth/EnvironmentAuth.ts:862`（object-key）；`apps/server/src/scheduledTasks/Schedule.ts:35`（object-key）；`apps/server/src/storageCleanup.ts:1283`（object-key）；`apps/server/src/storageCleanup.ts:1289`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:77`（ts-type）；`apps/web/src/components/CustomSnoozeDialog.tsx:202`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:204`（comparison）；`apps/web/src/components/CustomSnoozeDialog.tsx:215`（never-attribute）；`apps/web/src/components/settings/SnoozePresetsSettings.tsx:39`（object-key）；`apps/web/src/components/settings/SnoozePresetsSettings.tsx:44`（object-key）；…（共 32 处）

### `folder`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomeWizard.tsx:1616`（A，ImportCandidateList）
- 同一文本作为值用途字面量出现 16 次：`apps/server/src/project/ManagedProjectFolders.ts:40`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:66`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:251`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:338`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:340`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:353`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:369`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:373`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:429`（object-key）；`apps/web/src/components/sidebar/SidebarThreadRow.tsx:539`（ts-type）；…（共 16 处）

### `folders`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomeWizard.tsx:1616`（A，ImportCandidateList）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/chat/ChatComposer.tsx:2558`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:37`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:40`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:54`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:81`（object-key）

### `hex`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1818`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 11 次：`apps/server/src/preview/PreviewBrowser.ts:231`（comparison）；`apps/server/src/provider/AntigravityInstallation.ts:566`（comparison）；`apps/server/src/provider/CodexInstallation.ts:559`（comparison）；`apps/server/src/scheduledTasks/webhookVerification.ts:26`（comparison）；`apps/server/src/scheduledTasks/webhookVerification.ts:29`（comparison）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1818`（never-attribute）；`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:84`（ts-type）；`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:99`（as-const）；`packages/contracts/src/scheduledTask.ts:80`（schema-literal）；`packages/shared/src/paletteSearch.ts:545`（object-key）；…（共 11 处）

### `in`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/DraftHeroProjectHeading.tsx:52`（A，DraftHeroProjectHeading）
- 同一文本作为值用途字面量出现 17 次：`apps/desktop/src/preview/Manager.ts:353`（ts-type）；`apps/desktop/src/preview/Manager.ts:355`（comparison）；`apps/desktop/src/window/DesktopWindow.ts:90`（ts-type）；`apps/desktop/src/window/DesktopWindow.ts:349`（comparison）；`apps/server/src/scheduledTasks/webhookFilter.ts:22`（switch-case）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:251`（comparison）；`apps/web/src/composer-code-block.ts:21`（ts-type）；`apps/web/src/composer-code-block.ts:23`（comparison）；`apps/web/src/composer-code-block.ts:122`（ts-type）；`apps/web/src/composer-code-block.ts:132`（comparison）；…（共 17 处）

### `left`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/usage/UsageLimitsPooled.tsx:554`（A，PoolWindowCard）
- 同一文本作为值用途字面量出现 171 次：`apps/desktop/src/preview/PickPreload.ts:645`（object-key）；`apps/desktop/src/preview/PickPreload.ts:995`（object-key）；`apps/desktop/src/preview/PickPreload.ts:999`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1010`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1037`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1038`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1040`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1044`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1048`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1074`（object-key）；…（共 171 处）

### `minutes`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1911`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 30 次：`apps/server/src/cli/trace.ts:96`（object-key）；`apps/server/src/cloud/CloudLink.ts:603`（object-key）；`apps/server/src/cloud/CloudLink.ts:1488`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:238`（object-key）；`apps/server/src/orchestration-v2/RunExecutionService.ts:1646`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:21`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:105`（object-key）；`apps/server/src/relay/AgentAwarenessRelay.ts:270`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:77`（ts-type）；`apps/web/src/components/CustomSnoozeDialog.tsx:202`（object-key）；…（共 30 处）

### `none`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1718`（A，GitActionsControl）
- 同一文本作为值用途字面量出现 156 次：`apps/desktop/src/electron/ElectronDialog.ts:42`（schema-literal）；`apps/desktop/src/preview/FaviconCapture.ts:37`（ts-type）；`apps/desktop/src/preview/Manager.ts:104`（ts-type）；`apps/desktop/src/preview/PickPreload.ts:65`（comparison）；`apps/desktop/src/preview/PickPreload.ts:85`（comparison）；`apps/desktop/src/preview/PickPreload.ts:1063`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:39`（ts-type）；`apps/server/src/auth/mcpOAuthHttp.ts:82`（as-const）；`apps/server/src/cloud/managedTunnelStartup.ts:19`（ts-type）；`apps/server/src/device/DeviceActions.ts:534`（comparison）；…（共 156 处）

### `optionId`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CustomModelEditor.tsx:218`（B，renderDescriptor）
- 同一文本作为值用途字面量出现 19 次：`apps/server/src/provider/acp/AntigravityProtocol.ts:160`（object-key）；`apps/server/src/provider/acp/AntigravityProtocol.ts:164`（object-key）；`apps/web/src/components/chat/ComposerCommandMenu.tsx:175`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3109`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3119`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3138`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3144`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:9032`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:9036`（object-key）；`packages/effect-acp/src/_generated/schema.gen.ts:3168`（object-key）；…（共 19 处）

### `or`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:506`（A，WhenExpressionNodeEditor）
- 同一文本作为值用途字面量出现 13 次：`apps/server/src/keybindings.ts:166`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:100`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:327`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.tsx:146`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:430`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:506`（never-attribute）；`apps/web/src/keybindings.ts:84`（switch-case）；`packages/client-runtime/src/work-log/commandLabel.ts:125`（membership）；`packages/client-runtime/src/work-log/commandLabel.ts:186`（membership）；`packages/contracts/src/keybindings.ts:188`（schema-literal）；…（共 13 处）

### `origin`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:788`（B，PublishRepositoryDialog）
- 同一文本作为值用途字面量出现 145 次：`apps/desktop/src/electron/ElectronProtocol.ts:179`（comparison）；`apps/desktop/src/preview/BrowserSession.ts:66`（object-key）；`apps/desktop/src/preview/PasskeyBackend.ts:5`（object-key）；`apps/desktop/src/preview/Passkeys.ts:182`（object-key）；`apps/server/src/cli/pair.ts:187`（object-key）；`apps/server/src/cli/pair.ts:551`（object-key）；`apps/server/src/cli/project.ts:361`（object-key）；`apps/server/src/cli/project.ts:371`（object-key）；`apps/server/src/cli/project.ts:382`（object-key）；`apps/server/src/cli/project.ts:385`（object-key）；…（共 145 处）

### `outdated`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:235`（A，ReviewThreadCard）
- 同一文本作为值用途字面量出现 5 次：`packages/client-runtime/src/connection/diagnosis.ts:52`（ts-type）；`packages/client-runtime/src/connection/diagnosis.ts:104`（switch-case）；`packages/client-runtime/src/connection/diagnosis.ts:166`（switch-case）；`packages/client-runtime/src/connection/diagnosis.ts:241`（switch-case）；`packages/source-control-bitbucket/src/server/bitbucketPullRequestJson.ts:103`（object-key）

### `override`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/settingsLayout.tsx:397`（B，SettingsRow）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/provider/AntigravityInstallation.ts:78`（ts-type）；`apps/server/src/provider/AntigravityInstallation.ts:250`（ts-type）；`packages/contracts/src/relayClient.ts:7`（schema-literal）；`packages/shared/src/relayClient.ts:37`（ts-type）

### `process`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:270`（A，AggregateCard）
- 同一文本作为值用途字面量出现 62 次：`apps/desktop/src/wsl/DesktopWslEnvironment.ts:143`（ts-type）；`apps/desktop/src/wsl/DesktopWslEnvironment.ts:162`（switch-case）；`apps/server/src/resourceTelemetry/Model.ts:17`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:567`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetryHistory.ts:44`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetryHistory.ts:268`（object-key）；`apps/server/src/serviceLauncher.ts:48`（object-key）；`apps/server/src/serviceLauncher.ts:614`（object-key）；`apps/server/src/sourceControl/ServerSourceControlHost.ts:38`（object-key）；`apps/server/src/sourceControl/SourceControlProviderRegistry.ts:246`（object-key）；…（共 62 处）

### `processes`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:270`（A，AggregateCard）
- 同一文本作为值用途字面量出现 20 次：`apps/server/src/diagnostics/ProcessDiagnostics.ts:84`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:60`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:602`（object-key）；`apps/server/src/resourceTelemetry/NativeTelemetryClient.ts:680`（object-key）；`apps/server/src/resourceTelemetry/NativeTelemetryClient.ts:854`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetry.ts:183`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetry.ts:296`（object-key）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:311`（object-key）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:317`（object-key）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:553`（object-key）；…（共 20 处）

### `retrying`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ConnectionDiagnosisDetails.tsx:73`（A，RetryCountdownTicker）
- 同一文本作为值用途字面量出现 6 次：`apps/web/src/components/onboarding/FirstRunGate.tsx:98`（comparison）；`apps/web/src/components/onboarding/FirstRunGate.tsx:172`（comparison）；`apps/web/src/components/onboarding/FirstRunGate.tsx:185`（object-key）；`apps/web/src/components/onboarding/FirstRunGate.tsx:188`（object-key）；`apps/web/src/hooks/useSettings.ts:71`（ts-type）；`apps/web/src/hooks/useSettings.ts:142`（comparison）

### `root`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AddEnvironmentDialog.tsx:572`（B，renderSshFields）
- 同一文本作为值用途字面量出现 125 次：`apps/desktop/src/snapShot/SnapShotAccessibility.ts:46`（ts-type）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:74`（object-key）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:88`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:302`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:338`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:357`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:437`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:14`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:172`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:176`（object-key）；…（共 125 处）

### `server`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ConnectionsSettings.tsx:1109`（B，ConnectionsSettings）
- 同一文本作为值用途字面量出现 260 次：`apps/desktop/src/app/DesktopAppActivation.ts:206`（object-key）；`apps/desktop/src/app/DesktopAppActivation.ts:219`（object-key）；`apps/desktop/src/app/DesktopAppActivation.ts:238`（object-key）；`apps/server/src/cli/triage.ts:139`（object-key）；`apps/server/src/diagnostics/ProcessResourceMonitor.ts:24`（comparison）；`apps/server/src/diagnostics/ProcessResourceMonitor.ts:45`（comparison）；`apps/server/src/htmlRender/publicProxy.ts:119`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:193`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:196`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:202`（object-key）；…（共 260 处）

### `setup`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProjectActionsList.tsx:38`（A，ProjectActionsList）
- 同一文本作为值用途字面量出现 15 次：`apps/desktop/src/snapShot/DesktopSnapShot.ts:183`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1578`（object-key）；`apps/server/src/project/ProjectSetupScriptRunner.ts:68`（ts-type）；`apps/server/src/provider/AntigravityProvider.ts:204`（object-key）；`apps/server/src/provider/Drivers/CodexManagedProvider.ts:68`（object-key）；`apps/server/src/provider/Drivers/CodexManagedProvider.ts:173`（object-key）；`apps/server/src/provider/unavailableProviderSnapshot.ts:29`（object-key）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:663`（object-key）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:710`（object-key）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:49`（object-key）；…（共 15 处）

### `stack`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/ThreadStatusIndicators.tsx:355`（A，ThreadPullRequestsMiniList）
- 同一文本作为值用途字面量出现 79 次：`apps/desktop/src/preview/PickPreload.ts:424`（object-key）；`apps/desktop/src/preview/PickPreload.ts:435`（object-key）；`apps/desktop/src/preview/PickedElementPayload.ts:34`（computed-key）；`apps/desktop/src/preview/PickedElementPayload.ts:35`（computed-key）；`apps/server/src/git/detachStackFrame.ts:9`（object-key）；`apps/server/src/mcp/toolkits/pullRequests/handlers.ts:124`（ts-type）；`apps/server/src/mcp/toolkits/pullRequests/handlers.ts:145`（object-key）；`apps/server/src/mcp/toolkits/pullRequests/tools.ts:281`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:732`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:3760`（comparison）；…（共 79 处）

### `team`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewerPicker.tsx:112`（A，PullRequestReviewerPicker）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/provider/ClaudeProvider.ts:101`（switch-case）；`apps/server/src/provider/CodexProvider.ts:149`（switch-case）；`apps/web/src/components/pullRequest/PullRequestReviewerPicker.tsx:111`（comparison）；`packages/contracts/src/pullRequest.ts:191`（schema-literal）；`packages/provider-cursor/src/server/adapter.ts:291`（as-const）；`packages/source-control-github/src/server/gitHubPullRequestJson.ts:1489`（comparison）

### `unavailable`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceHostAvailability.tsx:17`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 135 次：`apps/desktop/src/backend/DesktopServerExposure.ts:309`（object-key）；`apps/desktop/src/backend/DesktopServerExposure.ts:409`（object-key）；`apps/desktop/src/preview/BrowserImport/BrowserImport.ts:215`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:901`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1050`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1124`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1135`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1138`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1168`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1175`（comparison）；…（共 135 处）

### `viewed`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1145`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 16 次：`apps/server/src/persistence/PullRequestFilesViewed.ts:34`（object-key）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:212`（as-const）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:218`（as-const）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:283`（object-key）；`apps/web/src/components/pullRequest/filesViewedStore.ts:30`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:15`（comparison）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:50`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:54`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:63`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:64`（object-key）；…（共 16 处）
