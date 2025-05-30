package svc

import (
	"coin-exchange/app/usercenter/cmd/api/internal/config"
	"coin-exchange/app/usercenter/cmd/rpc/usercenter"

	"github.com/zeromicro/go-zero/rest"
	"github.com/zeromicro/go-zero/zrpc"
)

type ServiceContext struct {
	Config        config.Config
	UsercenterRpc usercenter.Usercenter

	SetUidToCtxMiddleware rest.Middleware
}

func NewServiceContext(c config.Config) *ServiceContext {

	return &ServiceContext{
		Config:        c,
		UsercenterRpc: usercenter.NewUsercenter(zrpc.MustNewClient(c.UsercenterRpcConf)),
	}
}
