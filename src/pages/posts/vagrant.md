    config.vm.synced_folder "#{HOME}/Sites/EventMobi/#{repo}", "/usr/share/eventmobi-nfs-#{proj}", type: "nfs"
    config.bindfs.bind_folder "/usr/share/eventmobi-nfs-#{proj}", "/usr/share/eventmobi-#{proj}",
      force_user: "ubuntu",  # Force mounted synced files to show as having owner 'ubuntu'
      force_group: "ubuntu", # Force mounted synced files to show as having group 'ubuntu'
      chown_ignore: true,    # Make `chown` fail silently
      chgrp_ignore: true,    # Make `chgrp` fail silently
      chmod_ignore: true     # Make `chmod` fail silently
