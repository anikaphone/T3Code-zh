# A/B 值用途重名 v0.1.10

A（JSX 文本/子表达式）和 B 原始白名单属性的文字，即使同一文本也出现在「从不转换」的值用途位置（比较、`switch case`、`as const`、字面量类型、对象键），仍照常转换——它们只用于显示。§4 要求把这些位置列出以便人工核对：若上游将来改成拿这些字段做判断，就需要改判定。

共 368 处显示位置（165 条文字）。此清单与 suspicious、可翻译计数分开统计，不计入可翻译位置总数。

### `Retry`（A，message，20 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/MermaidDiagram.tsx:308`（A，DiagramError）；`apps/web/src/components/chat/ThreadFindBar.tsx:121`（A，ThreadFindBar）；`apps/web/src/components/chat/TimelineWorkEntryRow.tsx:306`（A，WorkEntryLogRow）；`apps/web/src/components/chat/useAutoBalanceUpdateBanner.tsx:133`（B，useAutoBalanceUpdateBanner）；`apps/web/src/components/chat/useProjectCloneBanner.tsx:123`（A，useProjectCloneBanner）；`apps/web/src/components/chat/useSystemComposerBanners.tsx:254`（B，useSystemComposerBanners）；`apps/web/src/components/device/DeviceHostUpdates.tsx:58`（A，DeviceHostUpdates）；`apps/web/src/components/device/DevicePanel.tsx:288`（A，DevicePanel）；`apps/web/src/components/device/DevicePanel.tsx:455`（A，DeviceDiscoveryWarning）；`apps/web/src/components/onboarding/FirstRunGate.tsx:216`（A，FirstRunRecovery）；`apps/web/src/components/onboarding/WelcomePage.tsx:786`（A，ProjectsSection）；`apps/web/src/components/onboarding/WelcomePage.tsx:1359`（A，AgentInstallTerminal）；`apps/web/src/components/pullRequest/PullRequestActivityUnavailableState.tsx:30`（A，PullRequestActivityUnavailableState）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1103`（A，renderCodeViewFooter）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1923`（A，PullRequestCodeTab）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1966`（A，WithheldFileNotice）；`apps/web/src/components/pullRequest/PullRequestsPage.tsx:1300`（A，PullRequestsPage）；`apps/web/src/components/pullRequest/PullRequestsUnavailableState.tsx:41`（A，PullRequestsUnavailableState）；`apps/web/src/components/settings/ConnectionsSettings.tsx:949`（A，renderWslRow）；`apps/web/src/components/sidebar/SidebarUpdateCapsule.tsx:171`（A，SidebarUpdateCapsule）
- 同一文本作为值用途字面量出现 1 次：`packages/source-control-github/src/server/GitHubRequestPolicy.ts:446`（as-const）

### `Done`（A，message，15 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:873`（A，PublishRepositoryDialog）；`apps/web/src/components/GitActionsControl.tsx:1812`（A，GitActionsControl）；`apps/web/src/components/chat/GuestShareControls.tsx:149`（A，GuestShareDialog）；`apps/web/src/components/cloud/ConnectOnboardingDialog.tsx:325`（A，ConfiguredConnectOnboardingDialog）；`apps/web/src/components/device/DeviceSetup.tsx:282`（A，DeviceSetup）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:187`（A，Wizard）；`apps/web/src/components/settings/AuthorizedClientsSettings.tsx:366`（A，PairingLinkListRow）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:321`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BrowserImportWizard.tsx:549`（A，DoneStep）；`apps/web/src/components/settings/CaptureShortcutConfig.tsx:210`（A，CaptureShortcutConfig）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:95`（A，ProviderWizardAuthenticationStep）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1046`（A，WebhookDeliveriesDialog）；`apps/web/src/components/settings/SnapShotSetupDialog.tsx:466`（A，SnapShotSetupDialog）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:491`（A，TextGeneratorWizard）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:746`（A，TextGeneratorModelsDialog）
- 同一文本作为值用途字面量出现 3 次：`packages/client-runtime/src/state/threadActivityAnnouncement.ts:11`（as-const）；`packages/source-control-github/src/server/GitHubRequestPolicy.ts:449`（as-const）；`packages/source-control-github/src/server/GitHubRequestPolicy.ts:461`（comparison）

### `Off`（B，message，14 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:311`（B，EffortRows）；`apps/web/src/components/chat/TraitsPicker.tsx:474`（A，TraitsMenuContent）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.tsx:31`（A，MobileClientStatusBadge）；`apps/web/src/components/settings/ConnectionsSettings.tsx:1026`（A，renderWslRow）；`apps/web/src/components/settings/LoadBalancingSettings.tsx:68`（B，LoadBalancingSettings）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:653`（A，ProjectOverrideInheritance）；`apps/web/src/components/settings/PullRequestRoutingSettings.tsx:65`（B，PullRequestRoutingSettings）；`apps/web/src/components/settings/SnapShotSettings.tsx:485`（A，SnapShotSettings）；`apps/web/src/components/settings/SnapShotSettings.tsx:502`（A，SnapShotSettings）；`apps/web/src/components/settings/StorageSettings.tsx:244`（A，RetentionControl）；`apps/web/src/components/settings/StorageSettings.tsx:639`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:645`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1430`（A，VoiceSettingsPanel）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1445`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:473`（never-attribute）；`packages/shared/src/otelEnvironment.ts:17`（object-key）；`packages/shared/src/otelEnvironment.ts:369`（object-key）

### `Remove`（A，message，10 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CliCommandSettingsRow.tsx:82`（A，CliCommandSettingsRow）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:348`（A，rowActions）；`apps/web/src/components/settings/KeybindingsSettings.tsx:945`（A，KeybindingRowMenu）；`apps/web/src/components/settings/ProjectSettingsPanel.tsx:440`（A，checkoutControls）；`apps/web/src/components/settings/SecretsSettings.tsx:209`（A，RemoveSecretProviderButton）；`apps/web/src/components/settings/SourceControlHostSettings.tsx:71`（A，SourceControlHostSettings）；`apps/web/src/components/settings/SourceControlTokenSettings.tsx:153`（A，SourceControlTokenSettings）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:157`（A，TextGeneratorsSettings）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:222`（A，TextGeneratorsSettings）；`apps/web/src/components/settings/UsageProviderSettings.tsx:100`（A，RemoveUsageProviderButton）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/vcs/VcsStatusBroadcaster.ts:1026`（comparison）

### `Close`（B，message，9 处）

- 显示位置（照常转换）：`apps/web/src/components/AppRouteModal.tsx:105`（B，AppRouteModalClose）；`apps/web/src/components/chat/HtmlRenderDialog.tsx:52`（B，HtmlRenderDialog）；`apps/web/src/components/files/AttachmentFilePreview.tsx:476`（B，AttachmentFilePreview）；`apps/web/src/components/onboarding/WelcomePage.tsx:1363`（A，AgentInstallTerminal）；`apps/web/src/components/settings/BrowserImportWizard.tsx:577`（A，BlockedStep）；`apps/web/src/components/settings/ProjectFaviconPickerDialog.tsx:87`（B，ProjectFaviconPickerDialog）；`apps/web/src/components/settings/SnapShotSetupDialog.tsx:389`（A，SnapShotSetupDialog）；`apps/web/src/components/ui/dialog.tsx:143`（B，popup）；`apps/web/src/components/ui/sheet.tsx:116`（B，SheetPopup）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/backend/DesktopBackendPool.ts:115`（ts-type）；`apps/desktop/src/backend/DesktopBackendPool.ts:345`（as-const）

### `Default`（A，message，9 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:212`（A，ColumnRow）；`apps/web/src/components/chat/ComposerModelEffort.tsx:216`（A，ColumnRow）；`apps/web/src/components/chat/ComposerModelEffort.tsx:451`（A，OptionMenuRow）；`apps/web/src/components/chat/TraitsPicker.tsx:109`（A，DefaultBadge）；`apps/web/src/components/settings/AuthorizedClientsSettings.tsx:910`（A，AdvertisedEndpointListRow）；`apps/web/src/components/settings/CustomModelEditor.tsx:172`（A，renderChoice）；`apps/web/src/components/settings/DeviceHostEditor.tsx:178`（B，DeviceHostEditorForm）；`apps/web/src/components/settings/IntegrationsSettings.tsx:1418`（A，BrowserProfilesSetting）；`apps/web/src/components/settings/StorageSettings.tsx:90`（B，WorktreesDirectoryRow）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/device/DeviceControlsRail.tsx:172`（as-const）；`apps/web/src/components/files/officeArchive.ts:753`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:919`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:954`（comparison）

### `Mixed`（B，message，7 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BranchNamingSettings.tsx:105`（B，BranchNamingSettings）；`apps/web/src/components/settings/ProjectDefaultsSettings.tsx:194`（A，ProjectDefaultsSettings）；`apps/web/src/components/settings/ProjectDefaultsSettings.tsx:377`（A，ProjectDefaultsSettings）；`apps/web/src/components/settings/SettingsPanels.tsx:1809`（B，ThreadsSettingsPanel）；`apps/web/src/components/settings/StorageSettings.tsx:90`（B，WorktreesDirectoryRow）；`apps/web/src/components/settings/StorageSettings.tsx:635`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:778`（A，WorktreeCleanupSection）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/usage/UsagePriceOverrides.tsx:209`（comparison）

### `Sign in`（A，message，7 处）

- 显示位置（照常转换）：`apps/web/src/components/HostedEmptyState.tsx:92`（A，T3ConnectSteps）；`apps/web/src/components/auth/ApproveAgentSurface.tsx:159`（A，ApproveAgentSurface）；`apps/web/src/components/cloud/ConnectCliAuthSurface.tsx:91`（A，ConnectCliAuthorizeSurface）；`apps/web/src/components/settings/LabsSettingsPanel.tsx:90`（A，GuestLinksRowWithSignIn）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:311`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:70`（A，ProviderWizardAuthenticationStep）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:566`（A，ConfiguredCloudLinkRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:9`（as-const）

### `Dismiss`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/browser/ServerBrowserSurface.tsx:880`（A，ServerBrowserSurface）；`apps/web/src/components/chat/GuestShareControls.tsx:309`（A，GuestPendingMessages）；`apps/web/src/components/chat/useThreadLifecycle.tsx:647`（B，useThreadLifecycle）；`apps/web/src/components/desktop/SshPasswordPromptDialog.tsx:219`（A，ActiveSshPasswordPrompt）；`apps/web/src/components/settings/DatabaseStorageNotice.tsx:87`（A，DatabaseStorageNotice）；`apps/web/src/components/sidebar/SidebarUpdateCapsule.tsx:175`（A，SidebarUpdateCapsule）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:324`（object-key）

### `None`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/components/AddProjectToMachineDialog.tsx:371`（A，AddProjectToMachineDialog）；`apps/web/src/components/device/DeviceToolVersions.tsx:69`（A，DeviceToolVersions）；`apps/web/src/components/pullRequest/PullRequestGhosts.tsx:332`（A，PullRequestDetailGhost）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:842`（A，PullRequestSummaryTab）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:917`（A，PullRequestSummaryTab）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2002`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 34 次：`apps/server/src/device/LocalDeviceHost.ts:359`（comparison）；`apps/server/src/guest/http.ts:145`（comparison）；`apps/server/src/guest/http.ts:179`（comparison）；`apps/server/src/guest/http.ts:201`（comparison）；`apps/server/src/process/agentScope.ts:143`（comparison）；`apps/server/src/process/agentScope.ts:153`（comparison）；`apps/server/src/process/agentScope.ts:261`（comparison）；`apps/server/src/process/agentScope.ts:370`（comparison）；`apps/server/src/process/agentScope.ts:389`（comparison）；`apps/server/src/project/RepositoryIdentityResolver.ts:210`（comparison）；…（共 34 处）

### `Unavailable`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ModelListRow.tsx:98`（A，ModelListRow）；`apps/web/src/components/chat/ProviderModelPicker.tsx:436`（A，ProviderModelPicker）；`apps/web/src/components/cloud/CloudEnvironmentConnectList.tsx:424`（A，CloudEnvironmentConnectRows）；`apps/web/src/components/files/AudioPreview.tsx:162`（A，AudioChip）；`apps/web/src/components/settings/CodexSetupSection.tsx:1123`（B，CodexManagedRuntimeFields）；`apps/web/src/components/settings/CodexSetupSection.tsx:1142`（B，CodexManagedRuntimeFields）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/ThreadDetailsUsage.tsx:74`（never-attribute）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1202`（never-attribute）；`apps/web/src/components/usage/UsagePriceOverrides.tsx:210`（comparison）

### `Custom`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/StorageSettings.tsx:640`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:646`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:384`（A，TextGeneratorWizard）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1666`（A，VoiceSettingsPanel）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1671`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:918`（comparison）

### `Loading`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3651`（A，Sidebar）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:443`（A，InstanceSessionManagement）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:516`（A，InstanceSessionManagement）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:541`（A，InstanceSessionManagement）；`apps/web/src/components/ui/spinner.tsx:31`（B，Spinner）
- 同一文本作为值用途字面量出现 11 次：`apps/desktop/src/preview/Manager.ts:98`（ts-type）；`apps/desktop/src/preview/Manager.ts:1968`（comparison）；`apps/desktop/src/preview/Manager.ts:2018`（comparison）；`apps/server/src/preview/ServerBrowser.ts:1365`（comparison）；`apps/web/src/components/files/FilePreviewPanel.tsx:452`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:244`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:120`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:120`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:151`（comparison）；`packages/client-runtime/src/state/assets.ts:73`（ts-type）；…（共 11 处）

### `T3 Code`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/TimelineAssistantRows.tsx:55`（A，AssistantTimelineRow）；`apps/web/src/components/chat/TimelineAssistantRows.tsx:121`（A，SentMessageTimelineRow）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:140`（A，UpdateEverythingDialogContent）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:169`（A，UpdateEverythingDialogContent）；`apps/web/src/components/ui/standalone-page.tsx:26`（B，StandalonePageHeader）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/cloud/cliAuthHtml.ts:12`（as-const）

### `seconds`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BackgroundActivitySettings.tsx:197`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:226`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:254`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:282`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1168`（A，EnvironmentProviderSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/peer/PeerLinks.ts:536`（object-key）

### `Actions`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/ProjectScriptsControl.tsx:382`（A，ProjectScriptsControl）；`apps/web/src/components/ProjectScriptsControl.tsx:423`（A，ProjectScriptsControl）；`apps/web/src/components/settings/ProjectActionsSettings.tsx:111`（B，ProjectActionsSettings）；`apps/web/src/components/settings/ProjectActionsSettings.tsx:116`（B，ProjectActionsSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:317`（object-key）

### `Command`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/projectScriptEditor.tsx:483`（A，ProjectScriptEditorForm）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:368`（A，ProcessDiagnosticsTable）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:590`（A，ProcessResourceHistoryTable）；`apps/web/src/components/settings/KeybindingsSettings.tsx:1134`（B，NewKeybindingCommandSelect）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/shortcutModifierState.ts:98`（switch-case）；`packages/client-runtime/src/work-log/embeddedScripts.ts:232`（switch-case）

### `Connect`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CodexSetupSection.tsx:735`（A，ManagedCodexSetup）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:310`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:435`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:485`（A，TextGeneratorWizard）
- 同一文本作为值用途字面量出现 4 次：`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:104`（as-const）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:105`（as-const）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:231`（as-const）；`packages/shared/src/managedPolicyFile.ts:113`（object-key）

### `On`（B，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:311`（B，EffortRows）；`apps/web/src/components/chat/TraitsPicker.tsx:474`（A，TraitsMenuContent）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.tsx:31`（A，MobileClientStatusBadge）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:653`（A，ProjectOverrideInheritance）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:473`（never-attribute）

### `Project`（B，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:648`（B，PullRequestFiltersMenu）；`apps/web/src/components/settings/ProjectSettingsPanel.tsx:526`（B，ProjectDetail）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1694`（B，ScheduledTaskEditorForm）；`apps/web/src/components/settings/StorageSettings.tsx:313`（A，CleanupResults）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）

### `Ready`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceSetup.tsx:399`（A，PlatformStatus）；`apps/web/src/components/onboarding/WelcomePage.tsx:1197`（A，AgentRow）；`apps/web/src/components/settings/CodexSetupSection.tsx:154`（A，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:860`（A，ManagedCodexSetup）
- 同一文本作为值用途字面量出现 11 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:314`（comparison）；`apps/desktop/src/app/DesktopStartupRecovery.ts:343`（comparison）；`apps/desktop/src/app/DesktopState.ts:12`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:291`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:431`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:477`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:656`（comparison）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:690`（comparison）；`apps/server/src/environment/staleWhileRevalidate.ts:14`（ts-type）；`apps/server/src/environment/staleWhileRevalidate.ts:40`（comparison）；…（共 11 处）

### `Stop`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:267`（A，backgroundWorkNowItem）；`apps/web/src/components/preview/PreviewChromeRow.tsx:142`（B，PreviewChromeRow）；`apps/web/src/components/preview/PreviewChromeRow.tsx:149`（A，PreviewChromeRow）；`apps/web/src/components/settings/MicrophoneTest.tsx:206`（A，MicrophoneTest）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:2355`（object-key）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51596`（object-key）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51620`（object-key）

### `t3`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/InstallT3Commands.tsx:25`（A，InstallT3Commands）；`apps/web/src/components/InstallT3Commands.tsx:26`（A，InstallT3Commands）；`apps/web/src/components/onboarding/WelcomePage.tsx:1902`（A，CliPathSetup）；`apps/web/src/components/onboarding/WelcomePage.tsx:1906`（A，CliPathSetup）
- 同一文本作为值用途字面量出现 12 次：`apps/server/src/cli/invocation.ts:44`（object-key）；`apps/server/src/cli/invocation.ts:62`（comparison）；`apps/server/src/cli/invocation.ts:123`（comparison）；`apps/server/src/provider/ProviderCredentialStore.ts:18`（as-const）；`packages/contracts/src/providerSetup.ts:135`（schema-literal）；`packages/provider-core/src/server/ProviderHost.ts:26`（ts-type）；`packages/provider-core/src/server/auth.ts:13`（ts-type）；`packages/provider-cursor/src/server/auth.ts:476`（as-const）；`packages/provider-testing/src/TestProviderHost.ts:67`（as-const）；`packages/shared/src/otelEnvironment.ts:255`（object-key）；…（共 12 处）

### `App`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/auth/ConnectAgentSurface.tsx:272`（A，McpConsent）；`apps/web/src/components/device/DeviceToolsPanel.tsx:129`（B，DeviceToolsPanel）；`apps/web/src/components/settings/SettingsPanels.tsx:2297`（B，AboutSettingsPanel）
- 同一文本作为值用途字面量出现 8 次：`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:29`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:41`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:54`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:73`（object-key）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:39`（ts-type）；`apps/desktop/src/snapShot/SnapShotAccessibilityWorker.ts:9`（object-key）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:104`（as-const）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:105`（as-const）

### `Available`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/cloud/CloudEnvironmentConnectList.tsx:420`（A，CloudEnvironmentConnectRows）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:729`（A，PlatformIcon）；`apps/web/src/components/settings/SourceControlSettings.tsx:210`（A，itemSummary）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:692`（as-const）

### `Branch`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/DiffPanel.tsx:1066`（A，DiffPanel）；`apps/web/src/components/GitActionsControl.tsx:1777`（A，GitActionsControl）；`apps/web/src/components/chat/WorktreeSetupCard.tsx:255`（A，SetupDetails）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/SubagentTooltipContent.tsx:171`（comparison）

### `Clear`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:131`（A，goalNowItem）；`apps/web/src/components/device/DeviceToolsPanel.tsx:206`（A，DeviceToolsPanel）；`apps/web/src/components/device/DeviceToolsPanel.tsx:529`（A，LocationSection）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/terminal/ghostty/keyCodes.ts:201`（as-const）

### `Codex`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CodexSetupSection.tsx:124`（B，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:191`（B，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:818`（B，ManagedCodexSetup）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/provider/CodexProvider.ts:152`（as-const）

### `Delete`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/projectScriptEditor.tsx:561`（A，ProjectScriptEditorForm）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:498`（A，InstanceSessionManagement）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:852`（A，ScheduledTaskRow）
- 同一文本作为值用途字面量出现 11 次：`apps/desktop/src/preview/GuestInput.ts:37`（membership）；`apps/desktop/src/preview/RecordingInput.ts:31`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:61`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:61`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:715`（comparison）；`apps/web/src/components/projectScriptEditor.tsx:311`（comparison）；`apps/web/src/composer-rich-text-doc.ts:491`（object-key）；`apps/web/src/terminal/ghostty/keyCodes.ts:75`（as-const）；`apps/web/src/terminal/ghostty/keyCodes.ts:202`（as-const）；`packages/client-runtime/src/device/stream.ts:347`（object-key）；…（共 11 处）

### `Devices`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:829`（B，DeviceIntegrationSettings）；`apps/web/src/components/settings/LabsSettingsPanel.tsx:214`（A，SimlockHostsRow）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:379`（B，ProviderSettingsPanelContent）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/device/DevicePanel.tsx:267`（never-attribute）

### `Host`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:626`（B，PullRequestFiltersMenu）；`apps/web/src/components/settings/AddEnvironmentDialog.tsx:402`（A，renderRemoteFields）；`apps/web/src/components/settings/SourceControlTokenSettings.tsx:114`（A，SourceControlTokenSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerSurface.tsx:85`（object-key）

### `Process`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:584`（A，ProcessResourceHistoryTable）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:565`（A，ProcessTable）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:669`（A，HistoryProcessTable）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/preview/RecordingInput.ts:20`（membership）；`apps/web/src/browser/ServerBrowserSurface.tsx:680`（comparison）；`apps/web/src/terminal/ghostty/surface.ts:388`（comparison）

### `Resolved`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:320`（A，ReviewThreadCard）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:807`（B，renderItem）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:499`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/secrets/SecretCheck.ts:33`（as-const）；`apps/web/src/components/settings/SecretSourceInput.tsx:150`（comparison）

### `Running`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/BackgroundWorkDetails.tsx:62`（A，BackgroundWorkDetails）；`apps/web/src/components/chat/ThreadActivityBanners.tsx:229`（A，backgroundWorkNowItem）；`apps/web/src/components/device/DeviceToolVersions.tsx:63`（A，DeviceToolVersions）
- 同一文本作为值用途字面量出现 5 次：`apps/server/src/pullRequest/PullRequestReviewGuideService.ts:489`（comparison）；`apps/web/src/components/pullRequest/guide/PullRequestGuideRunCoordinator.tsx:71`（comparison）；`apps/web/src/components/pullRequest/guide/useReviewGuideWriter.ts:34`（comparison）；`apps/web/src/state/pullRequests.ts:486`（comparison）；`packages/tailscale/src/tailscale.ts:233`（comparison）

### `Settled`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3601`（B，Sidebar）；`apps/web/src/components/Sidebar.tsx:3617`（B，Sidebar）；`apps/web/src/components/chat/useThreadLifecycle.tsx:637`（B，useThreadLifecycle）
- 同一文本作为值用途字面量出现 4 次：`apps/web/src/hooks/showThreadUndoNotice.ts:16`（ts-type）；`apps/web/src/hooks/showThreadUndoNotice.ts:32`（object-key）；`packages/provider-acp/src/server/AcpSessionRuntime.ts:2698`（as-const）；`packages/provider-acp/src/server/AcpSessionRuntime.ts:2737`（comparison）

### `T3 Connect`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/clerk/T3ConnectUserProfilePage.tsx:261`（B，T3ConnectUserProfilePage）；`apps/web/src/components/settings/LinkMachineSelect.tsx:42`（A，LinkMachineBadge）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:793`（B，CloudLinkRow）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/cli/up.ts:169`（as-const）

### `Update`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:929`（A，versionActions）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:364`（B，SavedBackendListRow）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:375`（B，SavedBackendListRow）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:32`（ts-type）；`apps/desktop/src/app/DesktopStartupRecovery.ts:85`（switch-case）；`apps/desktop/src/app/DesktopStartupRecovery.ts:214`（comparison）

### `value`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CustomModelEditor.tsx:147`（B，renderChoice）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:553`（B，ProviderEnvironmentSection）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:577`（B，ProviderEnvironmentSection）
- 同一文本作为值用途字面量出现 1169 次：`apps/desktop/src/app/DesktopObservability.ts:110`（object-key）；`apps/desktop/src/app/DesktopObservability.ts:246`（object-key）；`apps/desktop/src/app/DesktopObservability.ts:252`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:254`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:276`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:278`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:335`（object-key）；`apps/desktop/src/preview/BrowserImport/BrowserImport.ts:170`（object-key）；`apps/desktop/src/preview/BrowserImport/ChromiumCookies.ts:57`（object-key）；`apps/desktop/src/preview/BrowserImport/ChromiumCookies.ts:73`（object-key）；…（共 1169 处）

### `Active`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3539`（B，Sidebar）；`apps/web/src/components/Sidebar.tsx:3550`（B，Sidebar）
- 同一文本作为值用途字面量出现 7 次：`apps/desktop/src/backend/DesktopBackendPool.ts:96`（ts-type）；`apps/desktop/src/backend/DesktopBackendPool.ts:282`（comparison）；`apps/desktop/src/backend/DesktopBackendPool.ts:380`（comparison）；`apps/desktop/src/backend/DesktopBackendPool.ts:387`（comparison）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1130`（never-attribute）；`packages/client-runtime/src/relay/cloudAccountService.ts:83`（ts-type）；`packages/client-runtime/src/relay/cloudAccountService.ts:170`（comparison）

### `Allowed`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/permissions/PermissionChecklist.tsx:33`（A，PermissionChecklist）；`apps/web/src/components/settings/SessionPermissions.tsx:30`（A，SessionPermissions）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/policy/managedProviders.ts:103`（ts-type）；`apps/server/src/policy/managedSettings.ts:157`（ts-type）

### `Android`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/RightPanelTabs.tsx:1585`（A，DeviceTabTooltip）；`apps/web/src/components/device/DeviceHostAvailability.tsx:16`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/ws.ts:834`（comparison）；`apps/web/src/remoteOpen.ts:156`（comparison）；`packages/contracts/src/baseSchemas.ts:287`（schema-literal）

### `Backspace`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteContent.tsx:112`（A，CommandPaletteContent）；`apps/web/src/components/projectScriptEditor.tsx:478`（A，ProjectScriptEditorForm）
- 同一文本作为值用途字面量出现 13 次：`apps/desktop/src/preview/GuestInput.ts:33`（membership）；`apps/desktop/src/preview/RecordingInput.ts:30`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:60`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:60`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:715`（comparison）；`apps/web/src/components/CommandPalette.tsx:2662`（comparison）；`apps/web/src/components/chat/ComposerStashMenu.tsx:115`（comparison）；`apps/web/src/components/projectScriptEditor.tsx:311`（comparison）；`apps/web/src/composer-rich-text-doc.ts:427`（object-key）；`apps/web/src/composer-rich-text-doc.ts:490`（object-key）；…（共 13 处）

### `Copy`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/GuestShareControls.tsx:130`（A，GuestShareDialog）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1121`（A，WebhookEndpointField）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/terminal/ghostty/keyCodes.ts:180`（as-const）

### `Failed`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:213`（A，ThreadLineageWorkflowRow）；`apps/web/src/components/settings/DeviceHostEditor.tsx:250`（A，DeviceHostEditorForm）
- 同一文本作为值用途字面量出现 23 次：`apps/desktop/src/backend/DesktopBackendConfiguration.ts:300`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:341`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:353`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:367`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:383`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:418`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:457`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:713`（comparison）；`apps/server/src/secrets/SecretCheck.ts:28`（as-const）；`apps/web/src/components/Sidebar.logic.ts:640`（ts-type）；…（共 23 处）

### `Files`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1799`（A，GitActionsControl）；`apps/web/src/components/diffs/DiffFileTree.tsx:193`（A，DiffFileTree）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/workspaceFileDrop.ts:26`（membership）；`apps/web/src/components/guest/GuestPage.tsx:717`（membership）；`apps/web/src/components/sidebar/SidebarFolderDrop.tsx:20`（membership）

### `Local ACP command`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AcpRegistrySearchStep.tsx:205`（A，AcpRegistrySearchStep）；`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:522`（A，AddProviderInstanceDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:247`（as-const）

### `Nightly`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:393`（A，AboutVersionSection）；`apps/web/src/components/settings/SettingsPanels.tsx:421`（A，AboutVersionSection）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/SidebarStageBackdrop.tsx:10`（ts-type）；`packages/contracts/src/ipc.ts:89`（ts-type）；`packages/contracts/src/ipc.ts:104`（schema-literal）

### `Provider`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:588`（A，PublishRepositoryDialog）；`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:477`（A，AddProviderInstanceDialog）
- 同一文本作为值用途字面量出现 4 次：`apps/web/src/components/GitActionsControl.tsx:494`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:8`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:9`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:10`（as-const）

### `Read`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:262`（B，AggregateCard）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:674`（A，HistoryProcessTable）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/electron/LinuxColorScheme.ts:21`（ts-type）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:620`（as-const）

### `Refresh provider status`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1014`（A，EnvironmentProviderSettings）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1025`（A，EnvironmentProviderSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ProviderStatusBanner.tsx:142`（non-display-call）

### `Repository`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteAddProject.tsx:160`（A，RemoteRepositorySummary）；`apps/web/src/components/GitActionsControl.tsx:665`（A，PublishRepositoryDialog）
- 同一文本作为值用途字面量出现 5 次：`apps/server/src/project/AgentSessionScanner.ts:994`（ts-type）；`apps/server/src/project/AgentSessionScanner.ts:1122`（comparison）；`apps/web/src/components/GitActionsControl.tsx:494`（as-const）；`packages/source-control-github/src/server/GitHubPullRequestApi.ts:2621`（comparison）；`packages/source-control-github/src/server/pullRequestReads.graphql.ts:1793`（schema-literal）

### `Service`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/TextGeneratorsSettings.tsx:350`（A，TextGeneratorWizard）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:353`（B，TextGeneratorWizard）
- 同一文本作为值用途字面量出现 912 次：`apps/desktop/src/app/DesktopAssets.ts:78`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:237`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:295`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:372`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:395`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:419`（ts-type）；`apps/desktop/src/app/DesktopCliShim.ts:119`（ts-type）；`apps/desktop/src/app/DesktopConnectionCatalogStore.ts:296`（ts-type）；`apps/desktop/src/app/DesktopEnvironment.ts:145`（ts-type）；`apps/desktop/src/app/DesktopObservability.ts:433`（ts-type）；…（共 912 处）

### `Settings`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/sidebar/SidebarChrome.tsx:271`（B，SidebarUtilityMenu）；`apps/web/src/routes/_chat.settings.tsx:120`（B，SettingsContentLayout）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/managedPolicyFile.ts:111`（object-key）

### `Skipped`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BrowserImportWizard.tsx:542`（A，DoneStep）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:186`（A，UpdateEverythingDialogContent）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/project/AgentSessionImporter.ts:272`（comparison）；`apps/server/src/project/AgentSessionScanner.ts:231`（ts-type）

### `Snoozed`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3584`（B，Sidebar）；`apps/web/src/components/chat/useThreadLifecycle.tsx:627`（B，useThreadLifecycle）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/hooks/showThreadUndoNotice.ts:16`（ts-type）；`apps/web/src/hooks/showThreadUndoNotice.ts:33`（object-key）

### `Version`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AboutVersionTitle.tsx:23`（A，AboutVersionTitle）；`apps/web/src/components/settings/ConnectionsSettings.tsx:1248`（B，ConnectionsSettingsContent）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/snapShot/LinuxSnapShot.ts:55`（object-key）；`apps/desktop/src/snapShot/LinuxSnapShot.ts:56`（object-key）；`apps/desktop/src/snapShot/NiriSnapShot.ts:45`（object-key）

### `Waiting`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/BackgroundWorkDetails.tsx:62`（A，BackgroundWorkDetails）；`apps/web/src/components/chat/ThreadActivityBanners.tsx:229`（A，backgroundWorkNowItem）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/Sidebar.logic.ts:644`（ts-type）

### `Working`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPalette.tsx:2898`（B，OpenCommandPaletteDialog）；`apps/web/src/components/Sidebar.tsx:3569`（B，Sidebar）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/Sidebar.logic.ts:637`（ts-type）；`packages/client-runtime/src/state/threadActivityAnnouncement.ts:8`（as-const）

### `You`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/TimelineUserMessageRow.tsx:876`（A，UserTimelineRow）；`apps/web/src/components/chat/TimelineUserMessageRow.tsx:900`（A，UserTimelineRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/guest/GuestPage.tsx:576`（never-attribute）

### `available`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceHostAvailability.tsx:17`（A，DeviceHostAvailability）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:678`（A，PlatformIcon）
- 同一文本作为值用途字面量出现 139 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:55`（comparison）；`apps/desktop/src/ipc/methods/wsl.ts:31`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:747`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:752`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:754`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1065`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1069`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1075`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1081`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1097`（object-key）；…（共 139 处）

### `comment`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:321`（A，ReviewThreadCard）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:403`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 143 次：`apps/desktop/src/preview/PickPreload.ts:1737`（object-key）；`apps/desktop/src/preview/PickedElementPayload.ts:64`（computed-key）；`apps/server/src/pullRequest/PullRequestService.ts:275`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:311`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:630`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2314`（ts-type）；`apps/server/src/pullRequest/PullRequestService.ts:2318`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:2328`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:2338`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:3987`（object-key）；…（共 143 处）

### `comments`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:321`（A，ReviewThreadCard）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:403`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 97 次：`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:302`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:385`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:416`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2009`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2481`（object-key）；`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:239`（object-key）；`apps/web/src/components/files/officeArchive.ts:689`（membership）；`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1218`（object-key）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:254`（object-key）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:292`（object-key）；…（共 97 处）

### `default`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentIconPicker.tsx:82`（A，EnvironmentIconMenu）；`apps/web/src/components/settings/FontFamilyPicker.tsx:166`（A，renderItem）
- 同一文本作为值用途字面量出现 560 次：`apps/desktop/src/ipc/methods/window.ts:199`（comparison）；`apps/desktop/src/snapShot/RegionSnapShotWorker.ts:8`（object-key）；`apps/server/src/device/DeviceActions.ts:88`（object-key）；`apps/server/src/device/DeviceActions.ts:94`（object-key）；`apps/server/src/mcp/McpInvocationContext.ts:81`（object-key）；`apps/server/src/mcp/OrchestratorMcpService.ts:389`（object-key）；`apps/server/src/mcp/threadAccess.ts:192`（comparison）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:4427`（comparison）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:12699`（as-const）；`apps/server/src/orchestration-v2/DispatchModeLimit.ts:31`（object-key）；…（共 560 处）

### `file`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:328`（A，ThreadDetailsPrRow）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1418`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 299 次：`apps/desktop/src/app/DesktopCliCommand.ts:273`（object-key）；`apps/desktop/src/permissions/MacPermissionHelper.ts:139`（object-key）；`apps/desktop/src/preview/BrowserSession.ts:135`（object-key）；`apps/desktop/src/preview/BrowserSession.ts:353`（object-key）；`apps/desktop/src/preview/BrowserSession.ts:359`（object-key）；`apps/server/src/assets/AssetAccess.ts:205`（ts-type）；`apps/server/src/assets/AssetAccess.ts:210`（object-key）；`apps/server/src/assets/AssetAccess.ts:1019`（object-key）；`apps/server/src/assets/AssetAccess.ts:1058`（object-key）；`apps/server/src/assets/AttachmentUpload.ts:44`（schema-literal）；…（共 299 处）

### `files`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:328`（A，ThreadDetailsPrRow）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1418`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 278 次：`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:101`（object-key）；`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:220`（object-key）；`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:235`（object-key）；`apps/server/src/git/GitManager.ts:1205`（object-key）；`apps/server/src/git/GitWorkflowService.ts:162`（object-key）；`apps/server/src/orchestration-v2/CheckpointCaptureService.ts:280`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:218`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:218`（ts-type）；`apps/server/src/orchestration-v2/CheckpointService.ts:232`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:353`（object-key）；…（共 278 处）

### `ghost`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:119`（A，ActorName）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:506`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 13 次：`apps/web/src/components/chat/MessageCopyButton.tsx:25`（ts-type）；`apps/web/src/components/chat/MessageCopyButton.tsx:46`（comparison）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:137`（key-argument）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:139`（key-argument）；`apps/web/src/components/ui/button.tsx:50`（object-key）；`apps/web/src/components/ui/input-group.tsx:24`（object-key）；`apps/web/src/components/ui/menu.tsx:127`（ts-type）；`apps/web/src/components/ui/menu.tsx:133`（comparison）；`apps/web/src/components/ui/menu.tsx:135`（non-display-call）；`apps/web/src/components/ui/select.tsx:23`（object-key）；…（共 13 处）

### `iOS`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/RightPanelTabs.tsx:1585`（A，DeviceTabTooltip）；`apps/web/src/components/device/DeviceHostAvailability.tsx:16`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/ws.ts:834`（comparison）；`apps/web/src/remoteOpen.ts:156`（comparison）；`packages/contracts/src/baseSchemas.ts:286`（schema-literal）

### `in`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/DraftHeroProjectHeading.tsx:52`（A，DraftHeroProjectHeading）；`apps/web/src/components/settings/SettingsScopeSentence.tsx:319`（A，CheckoutScopeMenu）
- 同一文本作为值用途字面量出现 18 次：`apps/desktop/src/preview/Manager.ts:369`（ts-type）；`apps/desktop/src/preview/Manager.ts:371`（comparison）；`apps/desktop/src/window/DesktopWindow.ts:119`（ts-type）；`apps/desktop/src/window/DesktopWindow.ts:435`（comparison）；`apps/server/src/scheduledTasks/webhookFilter.ts:22`（switch-case）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:281`（comparison）；`apps/web/src/composer-code-block.ts:21`（ts-type）；`apps/web/src/composer-code-block.ts:23`（comparison）；`apps/web/src/composer-code-block.ts:122`（ts-type）；`apps/web/src/composer-code-block.ts:132`（comparison）；…（共 18 处）

### `on`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2088`（A，ScheduledTaskEditorForm）；`apps/web/src/components/settings/SettingsScopeSentence.tsx:90`（A，SettingsScopeSentence）
- 同一文本作为值用途字面量出现 32 次：`apps/desktop/src/app/DesktopLifecycle.ts:77`（object-key）；`apps/desktop/src/electron/ElectronApp.ts:77`（object-key）；`apps/desktop/src/electron/ElectronApp.ts:252`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:96`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:189`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:191`（object-key）；`apps/desktop/src/ipc/DesktopIpc.ts:32`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:132`（ts-type）；`apps/desktop/src/snapShot/snapShot.ts:232`（comparison）；`apps/desktop/src/updates/updatesTestHarness.ts:109`（object-key）；…（共 32 处）

### `opened`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestLinkPreview.tsx:176`（A，PullRequestLinkPreview）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:281`（B，WebhookFiltersField）
- 同一文本作为值用途字面量出现 24 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:6208`（ts-type）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:10059`（ts-type）；`apps/server/src/preview/ServerBrowser.ts:2933`（comparison）；`apps/web/src/components/CommandPaletteThreadItems.tsx:183`（object-key）；`apps/web/src/components/device/DeviceAndroidFoldControls.tsx:101`（comparison）；`apps/web/src/components/device/DeviceAndroidFoldControls.tsx:103`（comparison）；`apps/web/src/components/device/deviceFold.ts:5`（ts-type）；`apps/web/src/components/device/deviceFold.ts:9`（ts-type）；`apps/web/src/components/device/deviceFold.ts:31`（comparison）；`apps/web/src/components/files/office/spreadsheet.worker.ts:38`（object-key）；…（共 24 处）

### `replies`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:298`（A，CollapsedComment）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:510`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 8 次：`apps/server/src/guest/GuestShareService.ts:497`（object-key）；`apps/server/src/guest/GuestShareService.ts:502`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:271`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:284`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:497`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:564`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:598`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:843`（object-key）

### `reply`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:298`（A，CollapsedComment）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:510`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 30 次：`apps/server/src/cli/thread.ts:675`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:253`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:355`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:405`（object-key）；`apps/server/src/orchestration-v2/ProviderCommitBatch.ts:274`（object-key）；`apps/server/src/orchestration-v2/ProviderCommitBatch.ts:278`（object-key）；`apps/web/src/components/ThreadTerminalDrawer.tsx:934`（ts-type）；`apps/web/src/components/ThreadTerminalDrawer.tsx:944`（ts-type）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:641`（object-key）；`apps/web/src/components/pullRequest/PullRequestSpeedActions.tsx:28`（object-key）；…（共 30 处）

### `updated`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1660`（A，PullRequestDetailPanel）；`apps/web/src/components/pullRequest/PullRequestGhosts.tsx:217`（A，PullRequestDetailGhost）
- 同一文本作为值用途字面量出现 41 次：`apps/server/src/cli/update.ts:556`（error-constructor）；`apps/server/src/orchestration-v2/Orchestrator.ts:848`（comparison）；`apps/server/src/orchestration-v2/Orchestrator.ts:2327`（comparison）；`apps/server/src/orchestration-v2/Orchestrator.ts:7314`（as-const）；`apps/server/src/orchestration-v2/ProjectionStore.ts:1937`（comparison）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:40`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:86`（object-key）；`apps/web/src/components/ProviderUpdateLaunchNotification.logic.ts:217`（ts-type）；`apps/web/src/components/ProviderUpdateLaunchNotification.logic.ts:258`（comparison）；`apps/web/src/components/ServerUpdateAction.tsx:107`（ts-type）；…（共 41 处）

### `Access`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/auth/ConnectAgentSurface.tsx:327`（A，McpConsent）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:104`（as-const）

### `Add ChatGPT account`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AddCodexAccountDialog.tsx:93`（B，AddCodexAccountDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddCodexAccountDialog.tsx:43`（non-display-call）

### `Alt`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:101`（A，KeybindingPill）
- 同一文本作为值用途字面量出现 8 次：`apps/desktop/src/preview/GuestInput.ts:45`（membership）；`apps/desktop/src/preview/RecordingInput.ts:23`（comparison）；`apps/desktop/src/preview/RecordingInput.ts:40`（membership）；`apps/web/src/components/AppSidebarLayout.tsx:224`（membership）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1859`（comparison）；`apps/web/src/components/settings/useSnapShotShortcutRecorder.tsx:23`（object-key）；`apps/web/src/shortcutModifierState.ts:102`（switch-case）；`packages/contracts/src/previewAutomation.ts:408`（schema-literal）

### `Any`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:454`（A，PullRequestLabelFilter）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/project/AgentSessionJson.ts:33`（switch-case）；`packages/source-control-gitlab/src/server/GitLabPullRequestCli.ts:843`（as-const）；`packages/source-control-gitlab/src/server/GitLabPullRequestCli.ts:885`（as-const）

### `Attachment`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/AttachmentFilePreview.tsx:394`（A，AttachmentFilePreview）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:309`（object-key）

### `Beta`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/LabsSettingsPanel.tsx:20`（B，LabsSettingsPanel）
- 同一文本作为值用途字面量出现 2 次：`packages/contracts/src/ipc.ts:89`（ts-type）；`packages/contracts/src/ipc.ts:104`（schema-literal）

### `Body`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:986`（B，WebhookDeliveriesDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:321`（object-key）

### `Checking`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:655`（A，DiagnosticsLastChecked）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:31`（ts-type）；`apps/desktop/src/app/DesktopStartupRecovery.ts:83`（switch-case）

### `Coalesce key`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1931`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:172`（as-const）

### `Commit`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1928`（A，GitActionsControl）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/GitActionsControl.tsx:266`（comparison）；`packages/source-control-github/src/server/gitHubPullRequestJson.ts:1224`（comparison）；`packages/source-control-github/src/server/pullRequestReads.graphql.ts:876`（schema-literal）

### `Connected`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DeviceHostEditor.tsx:254`（A，DeviceHostEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:690`（as-const）

### `Connecting`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/TextGeneratorsSettings.tsx:485`（A，TextGeneratorWizard）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/Sidebar.logic.ts:638`（ts-type）

### `Count`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:755`（A，AttributionTable）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:320`（object-key）

### `Desktop`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1076`（B，ResourceTelemetryDiagnosticsBody）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/previewViewport.ts:11`（ts-type）

### `Device hub`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:988`（B，DeviceIntegrationControls）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/device/DeviceToolVersions.tsx:54`（as-const）；`packages/client-runtime/src/state/device.ts:100`（as-const）

### `Disabled`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AcpSessionManagementSection.tsx:590`（A，InstanceSessionManagement）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1123`（never-attribute）

### `Duplicate request key`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1914`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:171`（as-const）

### `Enabled`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2133`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1122`（never-attribute）

### `Encoding`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2011`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/persistence/Errors.ts:8`（switch-case）；`packages/effect-acp/src/errors.ts:22`（schema-literal）；`packages/effect-acp/src/errors.ts:81`（switch-case）；`packages/effect-acp/src/errors.ts:116`（switch-case）；`packages/effect-codex-app-server/src/errors.ts:14`（schema-literal）；`packages/effect-codex-app-server/src/errors.ts:44`（switch-case）

### `Enter`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteContent.tsx:106`（A，CommandPaletteContent）
- 同一文本作为值用途字面量出现 74 次：`apps/desktop/src/preview/AnnotationKeyboard.ts:15`（comparison）；`apps/desktop/src/preview/GuestInput.ts:35`（membership）；`apps/desktop/src/preview/RecordingInput.ts:28`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:699`（comparison）；`apps/web/src/components/AddProjectToMachineDialog.tsx:387`（comparison）；`apps/web/src/components/BranchPicker.tsx:115`（comparison）；`apps/web/src/components/CommandPalette.tsx:2557`（comparison）；`apps/web/src/components/CommandPalette.tsx:2626`（comparison）；`apps/web/src/components/CommandPalette.tsx:2634`（comparison）；`apps/web/src/components/CommandPalette.tsx:2649`（comparison）；…（共 74 处）

### `Environment disconnected`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:690`（B，ScheduledTaskEnvironmentSection）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/IntegrationsSettings.tsx:878`（error-constructor）；`apps/web/src/components/settings/deviceHostConnectionChecks.ts:48`（error-constructor）

### `Fast`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:587`（B，SpeedControl）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:132`（comparison）；`apps/web/src/components/chat/ComposerModelEffort.tsx:544`（comparison）；`apps/web/src/components/chat/TraitsSpeed.tsx:21`（comparison）；`apps/web/src/components/settings/ProviderModelsSection.tsx:51`（comparison）；`packages/client-runtime/src/modelTraits.ts:140`（comparison）

### `Filter`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:1058`（A，PullRequestSummaryTab）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/persistence/Errors.ts:7`（switch-case）；`packages/effect-acp/src/errors.ts:21`（schema-literal）；`packages/effect-acp/src/errors.ts:80`（switch-case）；`packages/effect-acp/src/errors.ts:115`（switch-case）；`packages/effect-codex-app-server/src/errors.ts:13`（schema-literal）；`packages/effect-codex-app-server/src/errors.ts:43`（switch-case）

### `Foreground`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceToolsPanel.tsx:130`（B，DeviceToolsPanel）
- 同一文本作为值用途字面量出现 1 次：`packages/tailscale/src/tailscale.ts:557`（object-key）

### `Home`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceControlsRail.tsx:66`（B，DeviceControlsRail）
- 同一文本作为值用途字面量出现 22 次：`apps/desktop/src/preview/GuestInput.ts:39`（membership）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1144`（comparison）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1170`（comparison）；`apps/web/src/components/chat/TimelineMinimap.tsx:168`（comparison）；`apps/web/src/components/chat/timelineViewport.ts:65`（membership）；`apps/web/src/components/chat/useAssistantCitationTarget.ts:10`（membership）；`apps/web/src/components/files/FileExplorerPane.tsx:96`（switch-case）；`apps/web/src/components/files/VirtualTablePreview.tsx:454`（comparison）；`apps/web/src/components/files/VirtualTablePreview.tsx:458`（comparison）；`apps/web/src/components/files/office/Spreadsheet.tsx:128`（comparison）；…（共 22 处）

### `Icon`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentIconPicker.tsx:55`（A，EnvironmentIconMenu）
- 同一文本作为值用途字面量出现 124 次：`apps/web/src/components/ChatMarkdown.tsx:359`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:363`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:369`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:375`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:381`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:387`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:393`（object-key）；`apps/web/src/components/GitActionsControl.tsx:195`（object-key）；`apps/web/src/components/GitActionsControl.tsx:241`（ts-type）；`apps/web/src/components/GitActionsControl.tsx:255`（ts-type）；…（共 124 处）

### `Idle`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1127`（B，ResourceTelemetryDiagnosticsBody）
- 同一文本作为值用途字面量出现 28 次：`apps/desktop/src/preview/Manager.ts:97`（ts-type）；`apps/desktop/src/preview/Manager.ts:1239`（comparison）；`apps/desktop/src/preview/Manager.ts:2108`（comparison）；`apps/web/src/browser/ElectronBrowserHost.tsx:138`（comparison）；`apps/web/src/components/RightPanelTabs.tsx:601`（comparison）；`apps/web/src/components/RightPanelTabs.tsx:638`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:239`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:242`（as-const）；`apps/web/src/components/preview/PreviewView.tsx:243`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:247`（comparison）；…（共 28 处）

### `Interrupt`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerPrimaryActions.tsx:173`（A，StopGenerationButton）
- 同一文本作为值用途字面量出现 4 次：`packages/effect-acp/src/protocol.ts:366`（comparison）；`packages/effect-acp/src/protocol.ts:802`（switch-case）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51588`（object-key）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51604`（object-key）

### `J`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/guide/GuideStop.tsx:123`（A，GuideStop）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/terminalOutput.ts:540`（switch-case）

### `K`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/guide/GuideStop.tsx:124`（A，GuideStop）
- 同一文本作为值用途字面量出现 4 次：`apps/web/src/components/files/binaryPreview.worker.ts:69`（comparison）；`apps/web/src/components/files/binaryPreview.worker.ts:96`（comparison）；`packages/shared/src/terminalOutput.ts:537`（switch-case）；`packages/shared/src/usageFormat.ts:66`（as-const）

### `Language`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1532`（B，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/settingsSearch.ts:701`（as-const）

### `New thread`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/sidebar/SidebarThreadHeader.tsx:109`（B，SidebarThreadHeader）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/orchestration-v2/Orchestrator.ts:738`（comparison）；`apps/server/src/orchestration-v2/ThreadTitleRegenerationService.ts:233`（comparison）

### `Not available`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:729`（A，PlatformIcon）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:693`（as-const）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:703`（comparison）

### `Organization`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:2300`（B，AboutSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/policy/policyTemplates.ts:199`（comparison）；`packages/shared/src/managedPolicyFile.ts:109`（object-key）；`packages/source-control-github/src/server/pullRequestReviews.graphql.ts:24`（schema-literal）

### `Path`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/WorktreeSetupCard.tsx:271`（A，SetupDetails）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/cli/update.ts:210`（computed-key）；`apps/server/src/cloud/pinnedRuntime.ts:634`（computed-key）；`apps/server/src/process/externalLauncher.ts:113`（object-key）；`packages/provider-core/src/server/maintenanceResolver.ts:59`（object-key）

### `Phone`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomePage.tsx:920`（B，PhoneSection）
- 同一文本作为值用途字面量出现 11 次：`packages/shared/src/previewViewport.ts:11`（ts-type）；`packages/shared/src/previewViewport.ts:23`（as-const）；`packages/shared/src/previewViewport.ts:30`（as-const）；`packages/shared/src/previewViewport.ts:37`（as-const）；`packages/shared/src/previewViewport.ts:44`（as-const）；`packages/shared/src/previewViewport.ts:51`（as-const）；`packages/shared/src/previewViewport.ts:58`（as-const）；`packages/shared/src/previewViewport.ts:65`（as-const）；`packages/shared/src/previewViewport.ts:100`（as-const）；`packages/shared/src/previewViewport.ts:107`（as-const）；…（共 11 处）

### `Prompt`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1779`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/provider/acp/AntigravityChildWork.ts:49`（object-key）

### `Remove route`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentRoutesList.tsx:204`（A，SortableRouteRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/EnvironmentRoutesList.tsx:63`（non-display-call）

### `Session`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1138`（B，ResourceTelemetryDiagnosticsBody）
- 同一文本作为值用途字面量出现 1 次：`packages/provider-opencode/src/server/v2/usageLimits.ts:127`（as-const）

### `Skill`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerCommandMenu.tsx:337`（A，SkillSourceBadge）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/toolActivity.ts:21`（comparison）

### `Span`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:1243`（A，DiagnosticsSettingsBody）
- 同一文本作为值用途字面量出现 3 次：`packages/shared/src/nodeSqliteClient.ts:68`（comparison）；`packages/shared/src/nodeSqliteClient.ts:72`（comparison）；`packages/shared/src/nodeSqliteClient.ts:84`（comparison）

### `Status`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProviderInstanceCard.tsx:1311`（B，ProviderInstanceCard）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/cloud/ConnectReachability.ts:231`（object-key）；`apps/server/src/cloud/ConnectReachability.ts:294`（object-key）

### `System default`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/VoiceInputSetup.tsx:192`（A，VoiceInputSetup）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/MicrophoneOrderList.tsx:69`（never-attribute）

### `This connection cannot read host files.`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/FilePreviewPanel.tsx:1462`（A，FilePreviewPanel）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/media/MediaActions.tsx:72`（error-constructor）

### `Type`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:370`（A，ProcessDiagnosticsTable）
- 同一文本作为值用途字面量出现 29 次：`apps/server/src/cli/thread.ts:198`（ts-type）；`apps/server/src/peer/PeerMcpClient.ts:51`（ts-type）；`apps/server/src/textGeneration/ClaudeTextGeneration.ts:155`（ts-type）；`apps/server/src/textGeneration/CodexTextGeneration.ts:235`（ts-type）；`apps/web/src/components/settings/SecretProviderDialog.logic.ts:67`（ts-type）；`packages/contracts/src/baseSchemas.ts:125`（ts-type）；`packages/contracts/src/baseSchemas.ts:126`（ts-type）；`packages/contracts/src/baseSchemas.ts:134`（ts-type）；`packages/contracts/src/baseSchemas.ts:182`（ts-type）；`packages/contracts/src/baseSchemas.ts:215`（ts-type）；…（共 29 处）

### `Unknown`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceToolsPanel.tsx:389`（A，ChoiceSelect）
- 同一文本作为值用途字面量出现 9 次：`apps/server/src/assets/AttachmentUpload.ts:216`（error-constructor）；`apps/server/src/process/NonBlockingSpawner.ts:92`（error-constructor）；`apps/server/src/project/AgentSessionJson.ts:32`（switch-case）；`apps/server/src/provider/AntigravityInstallation.ts:461`（comparison）；`apps/server/src/provider/Drivers/CodexHomeLayout.ts:155`（comparison）；`apps/server/src/vcs/GitVcsDriver.ts:1690`（comparison）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1056`（never-attribute）；`packages/contracts/src/resourceTelemetry.ts:239`（schema-literal）；`packages/shared/src/symlink.ts:43`（error-constructor）

### `Updates`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:2161`（B，MaintenanceSettingsPanel）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/managedPolicyFile.ts:134`（object-key）

### `Worktree`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/PullRequestThreadDialog.tsx:312`（A，PullRequestThreadDialog）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/project/AgentSessionScanner.ts:996`（ts-type）；`apps/server/src/project/AgentSessionScanner.ts:1103`（comparison）

### `agent`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:217`（A，ThreadLineageWorkflowRow）
- 同一文本作为值用途字面量出现 199 次：`apps/desktop/src/preview/Manager.ts:119`（ts-type）；`apps/desktop/src/preview/PickPreload.ts:90`（comparison）；`apps/desktop/src/preview/PickPreload.ts:110`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:65`（ts-type）；`apps/desktop/src/preview/RecordingCursor.ts:80`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:149`（comparison）；`apps/server/src/cli/triage.ts:54`（object-key）；`apps/server/src/cli/triage.ts:133`（schema-literal）；`apps/server/src/cli/triage.ts:145`（object-key）；`apps/server/src/cli/triage.ts:182`（object-key）；…（共 199 处）

### `agents`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:217`（A，ThreadLineageWorkflowRow）
- 同一文本作为值用途字面量出现 24 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:7321`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:7729`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:105`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:120`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:181`（object-key）；`apps/web/src/rightPanelStore.ts:505`（comparison）；`apps/web/src/rightPanelStore.ts:595`（comparison）；`packages/client-runtime/src/state/subagentRuntime.ts:415`（object-key）；`packages/client-runtime/src/state/subagentRuntime.ts:452`（object-key）；`packages/contracts/src/acpRegistry.ts:79`（object-key）；…（共 24 处）

### `and`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:507`（A，WhenExpressionNodeEditor）
- 同一文本作为值用途字面量出现 14 次：`apps/server/src/keybindings.ts:164`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:99`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:327`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.tsx:148`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:484`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:507`（never-attribute）；`apps/web/src/keybindings.ts:82`（switch-case）；`packages/client-runtime/src/work-log/commandLabel.ts:73`（membership）；`packages/client-runtime/src/work-log/commandLabel.ts:161`（membership）；`packages/contracts/src/keybindings.ts:192`（schema-literal）；…（共 14 处）

### `approval`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1798`（A，PullRequestDetailPanel）
- 同一文本作为值用途字面量出现 49 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:5245`（ts-type）；`apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts:1434`（ts-type）；`apps/web/src/components/RightPanelTabs.tsx:703`（comparison）；`apps/web/src/components/Sidebar.logic.ts:887`（ts-type）；`apps/web/src/components/Sidebar.logic.ts:915`（comparison）；`apps/web/src/components/Sidebar.logic.ts:932`（comparison）；`apps/web/src/components/Sidebar.logic.ts:977`（switch-case）；`apps/web/src/components/Sidebar.logic.ts:1002`（membership）；`apps/web/src/components/Sidebar.logic.ts:1069`（ts-type）；`apps/web/src/components/Sidebar.logic.ts:1195`（comparison）；…（共 49 处）

### `approvals`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1798`（A，PullRequestDetailPanel）
- 同一文本作为值用途字面量出现 15 次：`apps/desktop/src/preview/BrowserSession.ts:136`（object-key）；`apps/desktop/src/preview/BrowserSession.ts:360`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:556`（object-key）；`apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts:304`（object-key）；`apps/web/src/components/chat/usePendingThreadRequests.ts:68`（object-key）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.logic.ts:9`（as-const）；`packages/client-runtime/src/state/threadRequests.ts:92`（object-key）；`packages/client-runtime/src/state/threadRequests.ts:291`（object-key）；`packages/contracts/src/orchestrationV2.ts:403`（object-key）；`packages/provider-acp/src/server/adapter.ts:767`（object-key）；…（共 15 处）

### `as`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SourceControlSettings.tsx:176`（A，itemSummary）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/chat/MarkdownCodeBlock.tsx:43`（object-key）；`apps/web/src/components/chat/MarkdownCodeBlock.tsx:53`（object-key）

### `at`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SnoozePresetsSettings.tsx:377`（A，SnoozePresetFields）
- 同一文本作为值用途字面量出现 105 次：`apps/server/src/device/SimlockDeviceHost.ts:228`（object-key）；`apps/server/src/device/SimlockDeviceHost.ts:362`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:88`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:686`（object-key）；`apps/server/src/orchestration-v2/RunExecutionService.ts:1809`（object-key）；`apps/server/src/orchestration-v2/RunExecutionService.ts:1811`（object-key）；`apps/server/src/orchestration-v2/RunExecutionService.ts:1825`（object-key）；`apps/server/src/orchestration-v2/RunExecutionService.ts:1829`（object-key）；`apps/server/src/orchestration-v2/assistantStreaming.ts:124`（object-key）；`apps/server/src/orchestration-v2/assistantStreaming.ts:196`（object-key）；…（共 105 处）

### `author`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:406`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 147 次：`apps/server/src/orchestration-v2/PullRequestSyncReactor.ts:231`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:49`（ts-type）；`apps/server/src/pullRequest/PullRequestService.ts:1321`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1800`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1911`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1968`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2007`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:3077`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:3360`（object-key）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1252`（object-key）；…（共 147 处）

### `authors`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:406`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 26 次：`apps/server/src/pullRequest/PullRequestService.ts:2712`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2724`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2734`（object-key）；`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:269`（object-key）；`apps/web/src/components/pullRequest/pullRequestList.logic.ts:114`（object-key）；`apps/web/src/state/pullRequests.ts:813`（object-key）；`packages/contracts/src/acpRegistry.ts:68`（object-key）；`packages/contracts/src/pullRequest.ts:251`（object-key）；`packages/contracts/src/pullRequest.ts:581`（schema-literal）；`packages/contracts/src/pullRequest.ts:608`（object-key）；…（共 26 处）

### `auto-settle`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:1925`（B，ThreadsSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/settings/SettingsPanels.tsx:1885`（never-attribute）；`apps/web/src/components/threadActionMenu.logic.ts:14`（ts-type）；`apps/web/src/components/threadActionMenu.logic.ts:209`（as-const）

### `base64`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2026`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 16 次：`apps/desktop/src/preview/FaviconCapture.ts:219`（comparison）；`apps/desktop/src/preview/FaviconCapture.ts:220`（membership）；`apps/desktop/src/preview/FaviconCapture.ts:227`（comparison）；`apps/server/src/htmlRender/HtmlRender.ts:335`（as-const）；`apps/server/src/imageMime.ts:51`（object-key）；`apps/server/src/imageMime.ts:71`（comparison）；`apps/server/src/imageMime.ts:107`（object-key）；`apps/server/src/orchestration-v2/toolOutputImageBytes.ts:9`（membership）；`apps/server/src/orchestration-v2/toolOutputImageBytes.ts:28`（comparison）；`apps/web/src/components/media/mediaContent.ts:32`（comparison）；…（共 16 处）

### `cell`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/NotebookPreview.tsx:102`（A，NotebookPreview）
- 同一文本作为值用途字面量出现 15 次：`apps/server/src/provider/documentTextWorker.ts:137`（membership）；`apps/server/src/provider/documentTextWorker.ts:465`（membership）；`apps/web/src/components/files/VirtualTablePreview.tsx:239`（never-attribute）；`apps/web/src/components/files/office/Spreadsheet.tsx:409`（object-key）；`apps/web/src/components/files/office/Spreadsheet.tsx:458`（object-key）；`apps/web/src/components/files/office/sheet-cells.ts:23`（comparison）；`apps/web/src/components/files/office/sheet-protocol.ts:93`（object-key）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:179`（never-attribute）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:183`（never-attribute）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:192`（never-attribute）；…（共 15 处）

### `cells`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/NotebookPreview.tsx:102`（A，NotebookPreview）
- 同一文本作为值用途字面量出现 12 次：`apps/server/src/provider/documentTextWorker.ts:338`（in-operator）；`apps/web/src/components/files/extendedDocumentPreview.ts:494`（object-key）；`apps/web/src/components/files/officeArchive.ts:249`（object-key）；`apps/web/src/components/files/officeArchive.ts:671`（object-key）；`apps/web/src/components/files/officePreviewProtocol.ts:31`（object-key）；`apps/web/src/components/files/office/sheet-protocol.ts:98`（object-key）；`apps/web/src/components/files/office/slide-text.ts:61`（object-key）；`apps/web/src/components/files/office/spreadsheet.worker.ts:170`（object-key）；`apps/web/src/terminal/ghostty/core.ts:39`（object-key）；`apps/web/src/terminal/ghostty/core.ts:104`（object-key）；…（共 12 处）

### `chain`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/ThreadStatusIndicators.tsx:391`（A，ThreadPullRequestsMiniList）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/ComposerPromptEditorTiptap.tsx:601`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:623`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:661`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:675`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:702`（object-key）

### `checks`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestChecksPopover.tsx:190`（A，PullRequestChecksPopover）
- 同一文本作为值用途字面量出现 98 次：`apps/desktop/src/updates/DesktopRemoteUpdates.ts:259`（object-key）；`apps/desktop/src/updates/DesktopRemoteUpdates.ts:283`（object-key）；`apps/desktop/src/updates/DesktopRemoteUpdates.ts:287`（object-key）；`apps/desktop/src/updates/remoteUpdateFlow.ts:16`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:2559`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:2568`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:2589`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:9499`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:20`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:46`（ts-type）；…（共 98 处）

### `commented`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestLinkPreview.tsx:209`（A，LinkedComment）
- 同一文本作为值用途字面量出现 1 次：`packages/source-control-gitcafe/src/server/gitCafePullRequestJson.ts:467`（as-const）

### `contrast`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AppearanceSettingsPanel.tsx:172`（B，AppearanceSettingsPanel）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/ui/checkbox.tsx:13`（object-key）

### `cost`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/usage/UsagePage.tsx:766`（A，UsageOverview）
- 同一文本作为值用途字面量出现 30 次：`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:38`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:315`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:335`（object-key）；`apps/web/src/components/files/office/word-document.ts:159`（object-key）；`apps/web/src/components/usage/UsagePage.tsx:605`（ts-type）；`apps/web/src/components/usage/UsagePage.tsx:667`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:674`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:676`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:703`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:743`（comparison）；…（共 30 处）

### `custom`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProviderModelsSection.tsx:567`（A，ProviderModelRow）
- 同一文本作为值用途字面量出现 101 次：`apps/server/src/git/GitManager.ts:903`（switch-case）；`apps/server/src/orchestration-v2/ThreadLaunchService.ts:588`（comparison）；`apps/server/src/speech/postProcessing.ts:40`（comparison）；`apps/web/src/components/settings/BranchNamingSettings.tsx:19`（object-key）；`apps/web/src/components/settings/BranchNamingSettings.tsx:117`（comparison）；`apps/web/src/components/settings/IntegrationsSettings.tsx:710`（object-key）；`apps/web/src/components/settings/IntegrationsSettings.tsx:760`（comparison）；`apps/web/src/components/settings/SettingInheritance.tsx:37`（object-key）；`apps/web/src/components/settings/SettingInheritance.tsx:44`（object-key）；`apps/web/src/components/settings/SettingsPanels.logic.ts:194`（comparison）；…（共 101 处）

### `days`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/StorageSettings.tsx:238`（A，RetentionControl）
- 同一文本作为值用途字面量出现 34 次：`apps/server/src/auth/EnvironmentAuth.ts:927`（object-key）；`apps/server/src/scheduledTasks/Schedule.ts:35`（object-key）；`apps/server/src/storageCleanup.ts:1804`（object-key）；`apps/server/src/storageCleanup.ts:1810`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:77`（ts-type）；`apps/web/src/components/CustomSnoozeDialog.tsx:202`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:204`（comparison）；`apps/web/src/components/CustomSnoozeDialog.tsx:215`（never-attribute）；`apps/web/src/components/settings/SnoozePresetsSettings.tsx:39`（object-key）；`apps/web/src/components/settings/SnoozePresetsSettings.tsx:44`（object-key）；…（共 34 处）

### `folder`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomePage.tsx:1704`（A，ImportCandidateList）
- 同一文本作为值用途字面量出现 17 次：`apps/server/src/project/ManagedProjectFolders.ts:48`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:86`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:306`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:387`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:389`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:402`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:418`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:422`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:478`（object-key）；`apps/server/src/workspace/restoreMissingWorktree.ts:72`（object-key）；…（共 17 处）

### `folders`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomePage.tsx:1704`（A，ImportCandidateList）
- 同一文本作为值用途字面量出现 9 次：`apps/server/src/workspace/IgnorePatterns.ts:14`（ts-type）；`apps/server/src/workspace/IgnorePatterns.ts:109`（comparison）；`apps/server/src/workspace/IgnorePatterns.ts:140`（switch-case）；`apps/web/src/components/chat/ChatComposer.tsx:2760`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:37`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:40`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:54`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:81`（object-key）；`apps/web/src/components/sidebar/SidebarFolderDrop.tsx:107`（object-key）

### `from`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/TelemetryExportSettings.tsx:240`（A，TelemetryExportForm）
- 同一文本作为值用途字面量出现 83 次：`apps/server/src/checkpointing/CheckpointDiffQuery.ts:201`（error-constructor）；`apps/server/src/checkpointing/Errors.ts:72`（schema-literal）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:132`（object-key）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:132`（object-key）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:384`（object-key）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:400`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:2837`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:6444`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:8686`（object-key）；`apps/server/src/orchestration-v2/ProviderTurnStartService.ts:1067`（object-key）；…（共 83 处）

### `hex`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2025`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 11 次：`apps/server/src/preview/PreviewBrowser.ts:231`（comparison）；`apps/server/src/provider/AntigravityInstallation.ts:697`（comparison）；`apps/server/src/provider/CodexInstallation.ts:667`（comparison）；`apps/server/src/scheduledTasks/webhookVerification.ts:38`（comparison）；`apps/server/src/speech/SpeechModelStore.ts:145`（comparison）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2025`（never-attribute）；`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:122`（ts-type）；`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:137`（as-const）；`packages/contracts/src/scheduledTask.ts:80`（schema-literal）；`packages/shared/src/paletteSearch.ts:555`（object-key）；…（共 11 处）

### `language`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:1065`（B，GeneralSettingsPanel）
- 同一文本作为值用途字面量出现 65 次：`apps/server/src/speech/CloudSpeech.ts:77`（key-argument）；`apps/server/src/speech/CloudSpeech.ts:99`（object-key）；`apps/server/src/speech/SpeechService.ts:639`（object-key）；`apps/server/src/speech/SpeechService.ts:775`（object-key）；`apps/server/src/speech/native.ts:456`（object-key）；`apps/web/src/components/chat/ComposerCodeBlockLanguagePicker.tsx:24`（object-key）；`apps/web/src/components/chat/ComposerCodeBlockLanguagePicker.tsx:32`（object-key）；`apps/web/src/components/chat/ComposerCodeBlockNodeView.tsx:20`（object-key）；`apps/web/src/components/chat/HighlightedTokens.tsx:27`（object-key）；`apps/web/src/components/chat/HighlightedTokens.tsx:33`（object-key）；…（共 65 处）

### `left`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/usage/UsageLimitsPooled.tsx:570`（A，PoolWindowCard）
- 同一文本作为值用途字面量出现 183 次：`apps/desktop/src/preview/PickPreload.ts:899`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1255`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1259`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1270`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1297`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1298`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1300`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1304`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1308`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1334`（object-key）；…（共 183 处）

### `minutes`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2126`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 30 次：`apps/server/src/cli/trace.ts:96`（object-key）；`apps/server/src/cloud/CloudLink.ts:1492`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:278`（object-key）；`apps/server/src/orchestration-v2/RunExecutionService.ts:2163`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:22`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:173`（object-key）；`apps/server/src/provider/codexUsageLimits.ts:249`（object-key）；`apps/server/src/relay/AgentAwarenessRelay.ts:273`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:77`（ts-type）；`apps/web/src/components/CustomSnoozeDialog.tsx:202`（object-key）；…（共 30 处）

### `none`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1817`（A，GitActionsControl）
- 同一文本作为值用途字面量出现 167 次：`apps/desktop/src/electron/ElectronDialog.ts:42`（schema-literal）；`apps/desktop/src/preview/FaviconCapture.ts:37`（ts-type）；`apps/desktop/src/preview/Manager.ts:119`（ts-type）；`apps/desktop/src/preview/Manager.ts:1424`（ts-type）；`apps/desktop/src/preview/PickPreload.ts:90`（comparison）；`apps/desktop/src/preview/PickPreload.ts:110`（comparison）；`apps/desktop/src/preview/PickPreload.ts:1323`（comparison）；`apps/desktop/src/preview/PickPreload.ts:1597`（comparison）；`apps/desktop/src/preview/PickPreload.ts:1670`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:65`（ts-type）；…（共 167 处）

### `optionId`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CustomModelEditor.tsx:224`（B，renderDescriptor）
- 同一文本作为值用途字面量出现 19 次：`apps/server/src/provider/acp/AntigravityProtocol.ts:160`（object-key）；`apps/server/src/provider/acp/AntigravityProtocol.ts:164`（object-key）；`apps/web/src/components/chat/ComposerCommandMenu.tsx:190`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3123`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3133`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3152`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3158`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:9046`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:9050`（object-key）；`packages/effect-acp/src/_generated/schema.gen.ts:3184`（object-key）；…（共 19 处）

### `or`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:508`（A，WhenExpressionNodeEditor）
- 同一文本作为值用途字面量出现 13 次：`apps/server/src/keybindings.ts:166`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:101`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:328`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.tsx:148`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:432`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:508`（never-attribute）；`apps/web/src/keybindings.ts:84`（switch-case）；`packages/client-runtime/src/work-log/commandLabel.ts:125`（membership）；`packages/client-runtime/src/work-log/commandLabel.ts:186`（membership）；`packages/contracts/src/keybindings.ts:197`（schema-literal）；…（共 13 处）

### `origin`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:777`（B，PublishRepositoryDialog）
- 同一文本作为值用途字面量出现 171 次：`apps/desktop/src/electron/ElectronProtocol.ts:179`（comparison）；`apps/desktop/src/preview/BrowserSession.ts:76`（object-key）；`apps/desktop/src/preview/BrowserSession.ts:108`（object-key）；`apps/desktop/src/preview/BrowserSession.ts:117`（object-key）；`apps/desktop/src/preview/BrowserSession.ts:518`（object-key）；`apps/desktop/src/preview/PasskeyBackend.ts:5`（object-key）；`apps/desktop/src/preview/Passkeys.ts:182`（object-key）；`apps/server/src/cli/pair.ts:216`（object-key）；`apps/server/src/cli/pair.ts:613`（object-key）；`apps/server/src/cli/project.ts:365`（object-key）；…（共 171 处）

### `outdated`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:323`（A，ReviewThreadCard）
- 同一文本作为值用途字面量出现 5 次：`packages/client-runtime/src/connection/diagnosis.ts:52`（ts-type）；`packages/client-runtime/src/connection/diagnosis.ts:106`（switch-case）；`packages/client-runtime/src/connection/diagnosis.ts:177`（switch-case）；`packages/client-runtime/src/connection/diagnosis.ts:252`（switch-case）；`packages/source-control-bitbucket/src/server/bitbucketPullRequestJson.ts:103`（object-key）

### `override`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/settingsLayout.tsx:407`（B，SettingsRow）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/provider/AntigravityInstallation.ts:95`（ts-type）；`apps/server/src/provider/AntigravityInstallation.ts:313`（ts-type）；`packages/contracts/src/relayClient.ts:7`（schema-literal）；`packages/shared/src/relayClient.ts:38`（ts-type）

### `process`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:256`（A，AggregateCard）
- 同一文本作为值用途字面量出现 67 次：`apps/desktop/src/wsl/DesktopWslEnvironment.ts:143`（ts-type）；`apps/desktop/src/wsl/DesktopWslEnvironment.ts:162`（switch-case）；`apps/server/src/resourceTelemetry/Model.ts:17`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:567`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetryHistory.ts:44`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetryHistory.ts:268`（object-key）；`apps/server/src/serviceLauncher.ts:70`（object-key）；`apps/server/src/serviceLauncher.ts:1202`（object-key）；`apps/server/src/sourceControl/ServerSourceControlHost.ts:38`（object-key）；`apps/server/src/sourceControl/SourceControlProviderRegistry.ts:246`（object-key）；…（共 67 处）

### `processes`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:256`（A，AggregateCard）
- 同一文本作为值用途字面量出现 23 次：`apps/server/src/diagnostics/ProcessDiagnostics.ts:84`（object-key）；`apps/server/src/process/providerProcesses.ts:26`（object-key）；`apps/server/src/process/providerProcesses.ts:69`（ts-type）；`apps/server/src/process/providerProcesses.ts:81`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:60`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:602`（object-key）；`apps/server/src/resourceTelemetry/NativeTelemetryClient.ts:680`（object-key）；`apps/server/src/resourceTelemetry/NativeTelemetryClient.ts:854`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetry.ts:183`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetry.ts:296`（object-key）；…（共 23 处）

### `retrying`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ConnectionDiagnosisDetails.tsx:73`（A，RetryCountdownTicker）
- 同一文本作为值用途字面量出现 6 次：`apps/web/src/components/onboarding/FirstRunGate.tsx:98`（comparison）；`apps/web/src/components/onboarding/FirstRunGate.tsx:172`（comparison）；`apps/web/src/components/onboarding/FirstRunGate.tsx:185`（object-key）；`apps/web/src/components/onboarding/FirstRunGate.tsx:188`（object-key）；`apps/web/src/hooks/useSettings.ts:72`（ts-type）；`apps/web/src/hooks/useSettings.ts:144`（comparison）

### `root`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AddEnvironmentDialog.tsx:580`（B，renderSshFields）
- 同一文本作为值用途字面量出现 141 次：`apps/desktop/src/snapShot/SnapShotAccessibility.ts:46`（ts-type）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:74`（object-key）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:88`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:302`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:338`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:357`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:437`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:14`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:172`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:176`（object-key）；…（共 141 处）

### `server`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ConnectionsSettings.tsx:1269`（B，ConnectionsSettingsContent）
- 同一文本作为值用途字面量出现 281 次：`apps/desktop/src/app/DesktopAppActivation.ts:206`（object-key）；`apps/desktop/src/app/DesktopAppActivation.ts:219`（object-key）；`apps/desktop/src/app/DesktopAppActivation.ts:238`（object-key）；`apps/server/src/cli/triage.ts:167`（object-key）；`apps/server/src/diagnostics/ProcessResourceMonitor.ts:24`（comparison）；`apps/server/src/diagnostics/ProcessResourceMonitor.ts:45`（comparison）；`apps/server/src/htmlRender/publicProxy.ts:132`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:210`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:213`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:219`（object-key）；…（共 281 处）

### `setup`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProjectActionsList.tsx:38`（A，ProjectActionsList）
- 同一文本作为值用途字面量出现 16 次：`apps/desktop/src/snapShot/DesktopSnapShot.ts:196`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1612`（object-key）；`apps/server/src/project/ProjectSetupScriptRunner.ts:68`（ts-type）；`apps/server/src/provider/AntigravityProvider.ts:206`（object-key）；`apps/server/src/provider/Drivers/CodexManagedProvider.ts:68`（object-key）；`apps/server/src/provider/Drivers/CodexManagedProvider.ts:173`（object-key）；`apps/server/src/provider/unavailableProviderSnapshot.ts:29`（object-key）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:688`（object-key）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:762`（object-key）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:49`（object-key）；…（共 16 处）

### `stack`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/ThreadStatusIndicators.tsx:391`（A，ThreadPullRequestsMiniList）
- 同一文本作为值用途字面量出现 80 次：`apps/desktop/src/preview/PickPreload.ts:479`（object-key）；`apps/desktop/src/preview/PickPreload.ts:490`（object-key）；`apps/desktop/src/preview/PickedElementPayload.ts:34`（computed-key）；`apps/desktop/src/preview/PickedElementPayload.ts:35`（computed-key）；`apps/server/src/git/detachStackFrame.ts:9`（object-key）；`apps/server/src/mcp/toolkits/pullRequests/handlers.ts:51`（ts-type）；`apps/server/src/mcp/toolkits/pullRequests/handlers.ts:72`（object-key）；`apps/server/src/mcp/toolkits/pullRequests/tools.ts:219`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:912`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:4917`（comparison）；…（共 80 处）

### `team`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewerPicker.tsx:176`（A，PullRequestReviewerPicker）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/provider/ClaudeProvider.ts:140`（switch-case）；`apps/server/src/provider/CodexProvider.ts:227`（switch-case）；`apps/web/src/components/pullRequest/PullRequestReviewerPicker.tsx:175`（comparison）；`packages/contracts/src/pullRequest.ts:215`（schema-literal）；`packages/provider-cursor/src/server/adapter.ts:302`（as-const）；`packages/source-control-github/src/server/gitHubPullRequestJson.ts:1618`（comparison）

### `unavailable`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceHostAvailability.tsx:17`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 149 次：`apps/desktop/src/backend/DesktopServerExposure.ts:309`（object-key）；`apps/desktop/src/backend/DesktopServerExposure.ts:409`（object-key）；`apps/desktop/src/preview/BrowserImport/BrowserImport.ts:228`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:915`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1064`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1143`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1154`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1157`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1187`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1194`（comparison）；…（共 149 处）

### `via`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1433`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 18 次：`apps/web/src/components/settings/ConnectionDiagnosisDetails.tsx:44`（object-key）；`packages/client-runtime/src/authorization/service.ts:133`（object-key）；`packages/client-runtime/src/connection/diagnosis.ts:37`（object-key）；`packages/client-runtime/src/connection/errors.ts:112`（object-key）；`packages/client-runtime/src/connection/errors.ts:197`（object-key）；`packages/client-runtime/src/connection/errors.ts:206`（object-key）；`packages/client-runtime/src/connection/errors.ts:214`（object-key）；`packages/client-runtime/src/connection/errors.ts:222`（object-key）；`packages/client-runtime/src/connection/errors.ts:229`（object-key）；`packages/client-runtime/src/connection/errors.ts:236`（object-key）；…（共 18 处）

### `viewed`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1432`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 20 次：`apps/server/src/persistence/PullRequestFilesViewed.ts:34`（object-key）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:212`（as-const）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:218`（as-const）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:285`（object-key）；`apps/web/src/components/pullRequest/filesViewedStore.ts:35`（object-key）；`apps/web/src/components/pullRequest/filesViewedStore.ts:208`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:15`（comparison）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:50`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:54`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:62`（object-key）；…（共 20 处）
